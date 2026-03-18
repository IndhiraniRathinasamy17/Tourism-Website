import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Slideshow.css";

export default function Varkala() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("varkalaReviews")) || [];
    setReviews(storedReviews);
  }, []);

  const goToBooking = (mode, place) => {
    navigate(`/booktravel?mode=${mode}&place=${encodeURIComponent(place)}`);
  };

  const handleSubmitReview = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "Please login to submit a review.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    if (!reviewText.trim() || rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Review",
        text: "Please provide both rating and review text.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const username = localStorage.getItem("userName") || "Anonymous";
    const newReview = {
      user: username,
      text: reviewText,
      rating: rating,
      date: new Date().toLocaleString(),
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("varkalaReviews", JSON.stringify(updatedReviews));
    setReviewText("");
    setRating(0);

    Swal.fire({
      icon: "success",
      title: "Review Submitted!",
      text: "Thank you for your feedback.",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div className="padma-container">

      {/* Hero Section */}
      <div className="padma-hero">
        <img
          src="https://i0.wp.com/varkalakayak.com/wp-content/uploads/2022/10/varkala.jpg?resize=1140%2C502&ssl=1"
          alt="Varkala Beach"
        />
        <div className="padma-hero-overlay"></div>
        <div className="padma-hero-text">
          Varkala Beach 🌊
          <div className="padma-hero-sub">
            A serene beach known for cliffs, sunsets, spirituality, and adventure.
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="padma-section">
        <h1>About Varkala Beach</h1>
        <p>
          Varkala Beach, also known as <strong>Papanasam Beach</strong>, is a
          quiet beach along the southwestern coast of India in Thiruvananthapuram
          district. Unlike other bustling tourist hotspots, Varkala beach offers
          a peaceful retreat with massage centres, yoga, and meditation spots.
          Visitors can enjoy stunning sunsets, collect seashells, or sit on the
          cliffs overlooking the Arabian Sea.
        </p>

        <h2>Papanasam</h2>
        <p>
          Varkala Beach is famous for its spiritual significance. The nearby
          Janardana Swamy Temple is considered sacred, and devotees believe a
          dip in the waters absolves sins — hence the name "Papanasam" (destruction
          of sins).
        </p>

        <h2>Varkala Formation</h2>
        <p>
          The beach features a unique stretch of <strong>red laterite cliffs</strong>,
          the only such formation in southern Kerala. These cliffs are declared
          a national geological monument by the Geological Survey of India and
          are known as the “Varkala Formation.”
        </p>
        </section>
        <section className="padma-highlight">
        <h2>Adventure Sports</h2>
        <p>
          Varkala is not just about peace and spirituality — it’s also a hub for
          adventure seekers! Popular activities include:
        </p>
        <ul>
          <li>🏄 Surfing</li>
          <li>🪂 Parasailing</li>
          <li>🪁 Paragliding</li>
          <li>🏄‍♀️ Stand-up Paddleboarding (SUP)</li>
          <li>🚣 Kayaking</li>
        </ul>
      </section>

      {/* How to Reach */}
      <h2 className="padma-reach-title">How To Reach</h2>
      <div className="transport-container">
        <div className="transport-box">
          <p>
            <strong>🚌 By Bus</strong>
            <br />
            Varkala Bus Stand (~3.9 km away) <br />
            <button onClick={() => goToBooking("bus", "Varkala Bus Stand")}>
              Bus Details
            </button>
          </p>
        </div>

        <div className="transport-box">
          <p>
            <strong>✈️ By Flight</strong>
            <br />
            Thiruvananthapuram International Airport (~44 km away). <br />
            <button
              onClick={() =>
                goToBooking("flight", "Thiruvananthapuram International Airport")
              }
            >
              Flight Details
            </button>
          </p>
        </div>

        <div className="transport-box">
          <p>
            <strong>🚆 By Train</strong>
            <br />
            Varkala Railway Station (~3.6 km away) | Thiruvananthapuram Railway Station (~45 km away).
            <br />
            <button
              onClick={() => goToBooking("train", "Varkala Railway Station")}
            >
              Train Details
            </button>
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-section">
        <h3>Reviews:</h3>
        {reviews.length > 0 ? (
          reviews.map((rev, idx) => (
            <div key={idx} className="review">
              <strong>{rev.user}</strong> <em>({rev.date})</em>
              <div className="stars-display">
                {"⭐".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>
              <p>{rev.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
        <input
          type="text"
          placeholder="Enter your name..."
          value={reviewName}
          onChange={(e) => setReviewName(e.target.value)}
          className="review-input"
        />
        <textarea
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const starValue = index + 1;
            return (
              <span
                key={starValue}
                className={`star ${
                  starValue <= (hover || rating) ? "filled" : ""
                }`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
              >
                &#9733;
              </span>
            );
          })}
        </div>
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
