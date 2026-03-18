import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./PackageBookingForm.css";

export default function PackageBookingForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      sessionStorage.setItem("intendedPath", "/booking");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const selectedPackage =
    location.state?.packageData ||
    JSON.parse(localStorage.getItem("selectedPackage")) ||
    {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    idProof: "",
    packageName: selectedPackage.title || "",
    destination: selectedPackage.title
      ? selectedPackage.title.split(" - ")[0]
      : "Kerala",
    duration: selectedPackage.title
      ? selectedPackage.title.split(" - ")[1] || "Based on package"
      : "",
    travelDate: "",
    travelers: 1,
    travelType: "",
    roomType: "",
    numRooms: 1,
    hotelRating: "",
    mealPlan: "",
    foodPreference: "",
    allergies: "",
    transportMode: "",
    pickupLocation: "",
    dropLocation: "",
    localTransport: false,
    specialRequests: "",
    agreeTerms: false,
    receiveOffers: false,
    totalCost: parseInt(selectedPackage.price?.replace(/[^\d]/g, "")) || 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ------------------ Load Razorpay Script ------------------ */

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  /* ------------------ Payment Handler ------------------ */

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      Swal.fire({
        icon: "warning",
        title: "Please accept Terms & Conditions",
      });
      return;
    }

    const res = await loadRazorpayScript();

    if (!res) {
      Swal.fire({
        icon: "error",
        title: "Payment SDK failed to load",
      });
      return;
    }

    try {
      const orderData = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: formData.totalCost,
        }),
      }).then((t) => t.json());

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",
        amount: orderData.amount,
        currency: "INR",
        name: "Kerala Travel Booking",
        description: formData.packageName,
        order_id: orderData.id,

        handler: function (response) {
          console.log("Payment Success:", response);

          Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            text: "Your booking has been confirmed.",
          }).then(() => {
            navigate("/");
          });
        },

        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },

        notes: {
          destination: formData.destination,
          travelers: formData.travelers,
        },

        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <form className="package-booking-form" onSubmit={handlePayment}>
        <h2>Tour Package Booking</h2>

        {/* Personal Info */}
        <fieldset>
          <legend>Personal Information</legend>

          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <select name="gender" onChange={handleChange}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
          />
        </fieldset>

        {/* Package Details */}

        <fieldset>
          <legend>Package Details</legend>

          <input name="packageName" value={formData.packageName} readOnly />

          <input name="destination" value={formData.destination} readOnly />

          <input name="duration" value={formData.duration} readOnly />

          <input
            name="totalCost"
            value={`₹ ${formData.totalCost}`}
            readOnly
          />

          <input
            name="travelDate"
            type="date"
            onChange={handleChange}
          />

          <input
            name="travelers"
            type="number"
            min="1"
            placeholder="Number of Travelers"
            onChange={handleChange}
          />
        </fieldset>

        {/* Accommodation */}

        <fieldset>
          <legend>Accommodation</legend>

          <select name="roomType" onChange={handleChange}>
            <option value="">Room Type</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>

          <input
            name="numRooms"
            type="number"
            placeholder="Number of Rooms"
            onChange={handleChange}
          />
        </fieldset>

        {/* Transport */}

        <fieldset>
          <legend>Transport</legend>

          <select name="transportMode" onChange={handleChange}>
            <option value="">Mode of Travel</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Flight">Flight</option>
          </select>

          <input
            name="pickupLocation"
            placeholder="Pickup Location"
            onChange={handleChange}
          />

          <input
            name="dropLocation"
            placeholder="Drop Location"
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="localTransport"
              onChange={handleChange}
            />
            Include Local Transport
          </label>
        </fieldset>

        {/* Special Requests */}

        <fieldset>
          <legend>Special Requests</legend>

          <textarea
            name="specialRequests"
            placeholder="Any special requests"
            onChange={handleChange}
          ></textarea>
        </fieldset>

        {/* Terms */}

        <fieldset>
          <legend>Terms</legend>

          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              onChange={handleChange}
              required
            />
            I agree to Terms & Conditions
          </label>
        </fieldset>

        <button type="submit">
          Pay ₹{formData.totalCost} & Book
        </button>

        <button type="reset">Reset</button>
      </form>

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    </div>
  );
}