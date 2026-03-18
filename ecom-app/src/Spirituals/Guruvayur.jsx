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
    const storedReviews = JSON.parse(localStorage.getItem("guruvayurReviews")) || [];
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
          src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fguruvayur-ekadasi-1732609697_3c8a2785b9f79b5046fc.webp&w=1080&q=75"
          alt="Guruvayur temple"
        />
        <div className="padma-hero-text">Guruvayur Temple
             <div className="padma-hero-sub">
    One of the holiest Krishna temples in India, revered as Bhooloka Vaikunta (Heaven on Earth) and renowned for its divine traditions and spiritual grandeur.
            </div>
        </div>
      </div>

      {/* About Section */}
      <section className="padma-section">
        <h1>About the Temple</h1>
        <p>
          Guruvayur Temple, located in the Thrissur district of Kerala, is one of the most sacred and revered temples in India 
          dedicated to Lord Krishna, worshipped here as Guruvayurappan. Often referred to as the “Dwaraka of the South” and “Bhooloka Vaikunta”
         (Heaven on Earth), the temple is a major spiritual center that attracts millions of devotees every year.
         <br/>
         <br/>
         The temple is renowned for its ancient traditions, strict rituals, and deep-rooted devotion, which have been preserved for centuries. 
         According to legend, the idol of Lord Krishna at Guruvayur was installed by Brihaspati (Guru) and Vayu (the Wind God), from whom the 
         temple derives its name.
         <br/>
         <br/>
        The architecture of the temple reflects the typical Kerala style, with its grand gopuram (tower), mural paintings, and intricate carvings.
        Daily poojas, offerings, and rituals create a deeply spiritual atmosphere, while grand festivals such as Guruvayur Ekadasi, Vishu, and 
        Janmashtami draw huge gatherings of devotees.
        <br/>
        <br/>
        The temple is also famous for its elephants, especially the legendary elephant Guruvayur Kesavan, and continues to maintain an elephant 
        sanctuary, which is a unique feature compared to many other temples in India.
        <br/>
         <br/>
        Today, Guruvayur Temple stands not only as a place of worship but also as a symbol of Kerala’s cultural and spiritual heritage, making it 
        one of the most visited pilgrimage sites in the country.
        </p>
      </section>

      {/* Worship Timing */}
      <section className="padma-highlight">
        <h2>Worship Timing</h2>
        <p>
          <b>Morning hours:</b><br/>
          03:00 A.M to 03:20 A.M(Nirmalyam)<br/>
          03:20 A.M to 03:30 A.M(Thailabhishekam, Vakacharthu, Sankhabhishekam)<br/>
          03:30 A.M to 04:15 A.M(Malar Nivedyam, Alankaram)<br/>
          04:15 A.M to 04:30 A.M(Usha Nivedyam)<br/>
          04.30 A.M to 06.15 A.M(Ethirettu pooja followed by Usha pooja)<br/>
          07.15 A.M to 09.00 A.M(Seeveli,Palabhishekam,Navakabhishekam, Pantheeradi Nivedyam, and Pooja)<br/>
          11.30 A.M to 12.30 P.M(Ucha pooja)<br/><br/>
          <b>Evening hours:</b><br/>
          04:30 P.M to 05:00 P.M(Seeveli)<br/>
          06:00 P.M to 06:45 P.M(Deeparadhana)<br/>
          07:30 P.M to 07:45 P.M(Athazha pooja Nivedyam)<br/>
          07:45 P.M to 08:15 P.M(Athazha pooja)<br/>
          08:45 P.M to 09:00 P.M(Athazha seeveli)<br/>
          09:00 P.M to 09:15 P.M(Thrippuka, Olavayana)<br/><br/>
          <b>Senior Citizens Darshan Timing.</b><br/>
          Morning – 05:30 A.M to 08:00 A.M<br/>
          Evening – 04:30 P.M to 06:00 P.M<br/>
        </p>
      </section>

      {/* Dress Code */}
      <section className="padma-highlight padma-dresscode">
        <h2>Dress code to be followed at the temple:</h2>
        <p>
          Men must wear a mundu or dhoti (wrapped around the waist and extending to the ankles) 
  and should not wear shirts, t-shirts, or pants inside the temple. They may cover the upper body with a veshti/angavastram if needed.
  <br /><br />
  Women are required to wear saree, set-mundu (mundum neriyathum), salwar kameez, or long skirts with blouse/half-saree. 
  Western outfits such as jeans, leggings, or short tops are not permitted.
  <br /><br />
  Dhotis are easily available for purchase or rent at shops near the temple entrance. 
  In recent times, authorities have allowed men to wear a dhoti over pants and women to drape it over churidars to avoid inconvenience.
</p>
      </section>

      <section className="padma-contact">
        <h4>Contact</h4>
        <p>
          &#128205;Sreepadmam, Guruvayur, Thrissur - 680101.
          <br />
          &#128383;+91-487-2556335 , +91-487-2556280.
          <br />
          &#128231; contact.gdonline@gmail.com
          <br />
         &#127760; guruvayurdevaswom.in 
        </p>
      </section>

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
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}
