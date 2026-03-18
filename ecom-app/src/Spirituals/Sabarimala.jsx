import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Slideshow.css";
import Swal from "sweetalert2";

export default function PadmanabaswamyTemple() {
  const navigate = useNavigate();
const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("templeReviews")) || [];
    setReviews(storedReviews);
  }, []);

  const goToBooking = (mode, place) => {
    navigate(`/booktravel?mode=${mode}&place=${encodeURIComponent(place)}`);
  };

  const handleSubmitReview = () => {
    if (!reviewName.trim() || !reviewText.trim() || rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Review",
        text: "Please provide your name, rating, and review text.",
        confirmButtonColor: "#3085d6"
      });
      return;
    }

    const newReview = {
      user: reviewName,
      text: reviewText,
      rating: rating,
      date: new Date().toLocaleString()
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("templeReviews", JSON.stringify(updatedReviews));

    // Clear input fields
    setReviewText("");
    setReviewName("");
    setRating(0);

    Swal.fire({
      icon: "success",
      title: "Review Submitted!",
      text: "Thank you for your feedback.",
      confirmButtonColor: "#3085d6"
    });
  };

  return (
    <div className="padma-container">
      <div className="padma-hero">
        <img
          src="https://famoustemplesofindia.com/wp-content/uploads/2023/10/2-1-1024x768.jpg"
          alt="Sabarimala temple"
        />
        <div className="padma-hero-text">Sabarimala Sree Dharma Sastha Temple
             <div className="padma-hero-sub">
      One of the most sacred pilgrimage centers in India, dedicated to Lord
            Ayyappa.
            </div>
        </div>
      </div>

      {/* About Section */}
      <section className="padma-section">
        <h1>About the Temple</h1>
        <p>
          Sabarimala Sree Dharma Sastha Temple is located in the Periyar Tiger
          Reserve in the Western Ghat mountain ranges of Pathanamthitta district,
          Kerala. The temple is dedicated to Lord Ayyappa, who is believed to be
          the son of Lord Shiva and Lord Vishnu (in the form of Mohini).
          <br />
          <br />
          Sabarimala is one of the largest annual pilgrimage sites in the world,
          attracting millions of devotees every year. The pilgrimage is marked by
          strict spiritual discipline, including 41 days of vratham (austerity),
          celibacy, vegetarianism, and devotion.
          <br />
          <br />
          The temple is situated at an altitude of about 468 meters above sea
          level and is surrounded by dense forests. Devotees traditionally
          undertake a barefoot journey through forest paths chanting “Swamiye
          Saranam Ayyappa”.
          <br />
          <br />
          The temple opens only during specific periods of the year, mainly during
          the Mandala season, Makaravilakku, Vishu, and the first five days of each
          Malayalam month.
        </p>
      </section>

      {/* Worship Timing */}
      <section className="padma-highlight">
        <h2>Worship Timing</h2>
        <p>
          Morning hours:
          <br />
          04:00 A.M. – 01:00 P.M.
          <br />
          <br />
          Evening hours:
          <br />
          04:00 P.M. – 11:00 P.M.
          <br />
          <br />
          Note: Timings may vary during Mandala and Makaravilakku seasons.        </p>
      </section>

      {/* Dress Code */}
      <section className="padma-highlight padma-dresscode">
        <h2>Dress Code & Pilgrimage Rules</h2>
        <p>
          Only pilgrims observing the traditional 41-day vratham are permitted.
          <br />
          <br />
          Devotees must wear black, blue, or saffron clothing.
          <br />
          <br />
          Pilgrims traditionally walk barefoot and carry the irumudi kettu (sacred
          bundle).
          <br />
          <br />
          Consumption of alcohol, tobacco, and non-vegetarian food is strictly
          prohibited.
        </p>
      </section>

      {/* Contact */}
      <section className="padma-contact">
        <h4>Contact</h4>
        <p>
          &#128205; Sabarimala, Pathanamthitta, Kerala – 689713
          <br />
          &#128383; +91 4735 202010
          <br />
          &#128231; mathilakamofficespst@gmail.com, catoeospst@gmail.com
          <br />
          &#127760; www.spst.in
        </p>
      </section>

      {/* How To Reach */}
      <h2 className="padma-reach-title">How To Reach</h2>
      <div className="transport-container">
        <div className="transport-box">
          <p>
            <strong>&#128652; By Bus</strong>
            <br />
            Nearest Bus Stand: East Fort Bus Stop (~0.2 km away)
            <br />
            <button onClick={() => goToBooking("bus", "East Fort Bus Stop")}>
              Bus Details
            </button>
          </p>
        </div>
        <div className="transport-box">
          <p>
            <strong>&#128748; By Flight</strong>
            <br />
            Thiruvananthapuram International Airport, located about 5 km away.
            <br />
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
            <strong>&#128646; By Train</strong>
            <br />
            Thampanoor Railway Station, located about 1.4 km away.
            <br />
            <button onClick={() => goToBooking("train", "Thampanoor Railway Station")}>
              Train Details
            </button>
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Reviews</h3>
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

        {/* Add Review */}
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
                className={`star ${starValue <= (hover || rating) ? "filled" : ""}`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
              >
                ★
              </span>
            );
          })}
        </div>
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}
