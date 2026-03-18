import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookTravel.css";

export default function BookTravel() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode");
  const place = queryParams.get("place");

  const [travelOptions, setTravelOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");

  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);

  /* ✅ PLACE → CODE */
  const airportMap = {
    "Thiruvananthapuram International Airport": "TRV"
  };

  const stationMap = {
    "Thampanoor Railway Station": "TVC"
  };

  /* 🔥 SMART PRICE FUNCTION */
  function calculatePrice(source, destination, airline) {

    const basePrices = {
      MAA: 2000,
      DEL: 4000,
      BLR: 2500,
      BOM: 3500,
      TRV: 2200
    };

    const airlineMultiplier = {
      "IndiGo": 1.0,
      "Air India": 1.2,
      "Vistara": 1.3,
      "SpiceJet": 0.9
    };

    const base =
      (basePrices[source] || 2500) +
      (basePrices[destination] || 2500);

    const multiplier = airlineMultiplier[airline] || 1;

    const randomFactor = Math.floor(Math.random() * 1000);

    return Math.floor(base * multiplier + randomFactor);
  }

  /* ✅ FETCH DATA */
  const fetchData = async () => {
    try {
      setLoading(true);

      let url = "";

      if (mode === "train") {
        const stationCode = stationMap[place];
        url = `http://localhost:5000/api/trains?station=${stationCode}`;
      }

      if (mode === "flight") {
        const destCode = airportMap[place];

        if (!source || !destCode) {
          alert("Enter source");
          return;
        }

        url = `http://localhost:5000/api/flights?source=${source}&destination=${destCode}`;
      }

      if (mode === "bus") {
        url = "http://localhost:5000/api/buses";
      }

      const res = await fetch(url);
      const data = await res.json();

      let results = [];

      /* ✈️ FLIGHT DATA */
      if (mode === "flight" && data.data) {

        const airlinesList = ["IndiGo", "Air India", "Vistara", "SpiceJet"];

        results = data.data.map((flight) => {

          const airlineName =
            flight.airline?.name ||
            airlinesList[Math.floor(Math.random() * airlinesList.length)];

          return {
            from: flight.departure?.iata || source,
            departure: flight.departure?.scheduled || "",
            arrival: flight.arrival?.scheduled || "",
            airline: airlineName,

            // 🔥 SMART PRICE
            price: calculatePrice(source, airportMap[place], airlineName)
          };
        });

        results = results.slice(0, 10);
      }

      /* 🚆 TRAIN */
      else if (mode === "train") {
        results = (data.data || []).map((train) => ({
          from: train.from_station_name || "Unknown",
          departure: train.departure_time || "",
          arrival: train.arrival_time || "",
          price: train.fare || 500
        }));
      }

      /* 🚌 BUS */
      else {
        results = data.data || [];
      }

      setTravelOptions(results);
      setFilteredOptions(results);

    } catch (error) {
      console.error(error);
      alert("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => fetchData();

  const applyPriceFilter = () => {
    if (!maxPrice) return setFilteredOptions(travelOptions);
    setFilteredOptions(travelOptions.filter(i => i.price <= maxPrice));
  };

  const sortCheapest = () => {
    setFilteredOptions([...filteredOptions].sort((a, b) => a.price - b.price));
  };

  const sortFastest = () => {
    setFilteredOptions([...filteredOptions].sort(
      (a, b) => new Date(a.arrival) - new Date(b.arrival)
    ));
  };

  const handleBooking = (item) => {
    alert(`Booking confirmed!\n${mode} from ${item.from} to ${place}`);
  };

  return (
    <div className="booktravel-container">

      <h2>Available {mode} to {place}</h2>

      {mode === "flight" && (
        <div>
          <input
            placeholder="Enter Source (MAA, DEL...)"
            value={source}
            onChange={(e) => setSource(e.target.value.toUpperCase())}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      {mode === "train" && (
        <div>
          <input
            placeholder="Enter Source (MAA, DEL...)"
            value={source}
            onChange={(e) => setSource(e.target.value.toUpperCase())}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}

      {loading && <p>Loading...</p>}

      <div className="filters">
        <input
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={applyPriceFilter}>Filter</button>
        <button onClick={sortCheapest}>Cheapest</button>
        <button onClick={sortFastest}>Fastest</button>
      </div>

      <div className="card-grid">
        {filteredOptions.map((item, i) => (
          <div key={i} className="transport-card">

            <p><b>Airline:</b> {item.airline}</p>
            <p><b>From:</b> {item.from}</p>
            <p><b>To:</b> {place}</p>
            <p><b>Departure:</b> {item.departure}</p>
            <p><b>Arrival:</b> {item.arrival}</p>
            <p><b>Fare:</b> ₹{item.price}</p>

            <button onClick={() => handleBooking(item)}>
              Book Now
            </button>

          </div>
        ))}
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}