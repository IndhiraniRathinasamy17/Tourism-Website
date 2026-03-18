import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./PackageBookingForm.css";

export default function PackageBookingForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check login status
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      sessionStorage.setItem("intendedPath", "/booking");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Retrieve selected package from localStorage
  const selectedPackage =
    location.state?.packageData ||
    JSON.parse(localStorage.getItem("selectedPackage")) ||
    {};

  // Pre-fill form with selected package details
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
    paymentMethod: "",
    paymentInfo: "",
    totalCost: parseInt(selectedPackage.price?.replace(/[^\d]/g, "")) || 0,
    advancePayment: "",
    specialRequests: "",
    agreeTerms: false,
    receiveOffers: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      Swal.fire({
        icon: "warning",
        title: "Terms & Conditions",
        text: "Please agree to the terms & conditions before submitting.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    console.log("Booking Submitted:", formData);

    Swal.fire({
      icon: "success",
      title: "Booking Submitted!",
      text: "Your booking has been successfully submitted.",
      confirmButtonColor: "#3085d6",
    }).then(() => {
      // Optional: Redirect to another page after success
      navigate("/");
    });
  };

  return (
    <div>
 <form className="package-booking-form" onSubmit={handleSubmit}>
      <h2>Tour Package Booking</h2>

      {/* 1. Personal Info */}
      <fieldset>
        <legend>Personal Information</legend>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required />
        <select name="gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input name="age" type="number" placeholder="Age" onChange={handleChange} />
        <input name="idProof" placeholder="ID Proof Number (Optional)" onChange={handleChange} />
      </fieldset>

      {/* 2. Package Details */}
      <fieldset>
        <legend>Package Details</legend>
        <input name="packageName" value={formData.packageName} readOnly />
        <input name="destination" value={formData.destination} readOnly />
        <input name="duration" value={formData.duration} readOnly />
        <input name="totalCost" value={`₹ ${formData.totalCost}`} readOnly />
        <input name="travelDate" type="date" onChange={handleChange} />
        <input name="travelers" type="number" min="1" placeholder="Number of Travelers" onChange={handleChange} />
        <select name="travelType" onChange={handleChange}>
          <option value="">Select Travel Type</option>
          <option value="Family">Family</option>
          <option value="Solo">Solo</option>
          <option value="Group">Group</option>
          <option value="Couple">Couple</option>
          <option value="Senior">Senior</option>
        </select>
      </fieldset>

      {/* 3. Accommodation Preferences */}
      <fieldset>
        <legend>Accommodation Preferences</legend>
        <select name="roomType" onChange={handleChange}>
          <option value="">Room Type</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>
        <input name="numRooms" type="number" placeholder="Number of Rooms" onChange={handleChange} />
        <select name="hotelRating" onChange={handleChange}>
          <option value="">Hotel Rating</option>
          <option value="3-star">3-star</option>
          <option value="4-star">4-star</option>
          <option value="5-star">5-star</option>
        </select>
      </fieldset>

      {/* 4. Meal Preferences */}
      <fieldset>
        <legend>Meal Preferences</legend>
        <select name="mealPlan" onChange={handleChange}>
          <option value="">Meal Plan</option>
          <option value="Breakfast Only">Breakfast Only</option>
          <option value="Half-board">Half-board</option>
          <option value="Full-board">Full-board</option>
        </select>
        <select name="foodPreference" onChange={handleChange}>
          <option value="">Food Preference</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Jain">Jain</option>
          <option value="Vegan">Vegan</option>
        </select>
        <textarea name="allergies" placeholder="Any Allergies?" onChange={handleChange}></textarea>
      </fieldset>

      {/* 5. Transport Preferences */}
      <fieldset>
        <legend>Transport Preferences</legend>
        <select name="transportMode" onChange={handleChange}>
          <option value="">Mode of Travel</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Flight">Flight</option>
          <option value="Own Vehicle">Own Vehicle</option>
        </select>
        <input name="pickupLocation" placeholder="Pickup Location" onChange={handleChange} />
        <input name="dropLocation" placeholder="Drop Location" onChange={handleChange} />
        <label>
          <input type="checkbox" name="localTransport" onChange={handleChange} /> Include Local Transport
        </label>
      </fieldset>

      {/* 6. Payment Info */}
      <fieldset>
        <legend>Payment Information</legend>
        <select name="paymentMethod" onChange={handleChange}>
          <option value="">Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Netbanking">Netbanking</option>
        </select>
        <input name="paymentInfo" placeholder="UPI ID / Card Number" onChange={handleChange} />
        <input name="advancePayment" placeholder="Advance Payment (optional)" onChange={handleChange} />
      </fieldset>

      {/* 7. Special Requests */}
      <fieldset>
        <legend>Special Requests</legend>
        <textarea name="specialRequests" placeholder="Any special requests or notes" onChange={handleChange}></textarea>
      </fieldset>

      {/* 8. Terms & Confirmation */}
      <fieldset>
        <legend>Terms & Conditions</legend>
        <label>
          <input type="checkbox" name="agreeTerms" onChange={handleChange} required /> I agree to the terms & conditions
        </label>
        <label>
          <input type="checkbox" name="receiveOffers" onChange={handleChange} /> Send me offers and deals
        </label>
      </fieldset>

      <button type="submit">Submit Booking</button>
      <button type="reset">Reset</button>
    </form>
     <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
     </div>
  );
}