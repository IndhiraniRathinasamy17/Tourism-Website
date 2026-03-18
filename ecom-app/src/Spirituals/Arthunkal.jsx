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
          alt="padmanabhaswamy temple"
        />
        <div className="padma-hero-text">Sree Padmanabaswamy Temple
             <div className="padma-hero-sub">
      One of the richest temples in the world, known for its grandeur and devotion.
            </div>
        </div>
      </div>

      {/* About Section */}
      <section className="padma-section">
        <h1>About the Temple</h1>
        <p>
          In the heart of Thiruvananthapuram in Kerala stands a symbol of timeless
          spirituality and architectural grandeur - the Sree Padmanabhaswamy
          Temple. This ancient shrine which is a tribute to Lord Padmanabhaswamy
          (an incarnation of Lord Vishnu) is a reflection of the rich cultural
          heritage and deep rooted religious traditions of the land.
          <br />
          <br />
          Located inside the East Fort of the city it is believed to be the world’s
          richest temple. With an architectural style that’s a blend of the Kerala
          and Dravidian styles, the history of the temple dates back to the 8th
          century.
          <br />
          <br />
          The architectural marvel of the temple is a salute to the ingenuity and
          craftsmanship of the artisans of yore and is renowned for its work in
          stone and bronze.
          <br />
          <br />
          The idol of the presiding deity is noted for its composition which has
          12008 salagramams, which were brought from Nepal. It is believed to have
          been taken from the banks of the River Gandhaki.
          <br />
          <br />
          The Ottakkal Mandapam (Mandapam made of a single stone slab) in front of
          the sanctum sanctorum is a masterpiece in itself as it is made from a
          huge single stone block sourced from the Tirumala rock quarry. The main
          idol, which is 18 ft long, can be viewed through three different doors.
          While the head and chest are seen through the first door, the hands can
          be sighted through the second door and the feet through the third door.
          <br />
          <br />
          The interiors of the temple are adorned by exquisite paintings and
          murals, most of which are life sized depictions of Lord Vishnu in the
          reclining posture, Lord Ganapati, Gaja Lakshmi and Narasimha Swamy
          (half-lion, half man incarnation of Lord Vishnu). The flag post of the
          temple (dhwaja stamba) is covered with gold plated copper sheets and is
          about 80ft high. The Bali Peeda Mandapam and Mukha Mandapam which are
          halls embellished with sculptures of various Hindu deities are some of
          the interesting architectural features of this temple. The Navagraha
          Mandapa, is yet another notable feature that captures the attention of
          all visitors. Here the ceiling displays the navagrahas (the nine
          planets).
          <br />
          <br />
          The broad corridor that extends from the eastern side into the sanctum
          sanctorum is a sight to behold with its 365 and one-quarter
          granite-stone pillars that are sculptured with exquisite carvings. Below
          the main entrance, on the eastern side lies the nataka sala (which
          literally means drama hall). During the annual ten-day festival at the
          temple, held during the Malayalam months of Meenam and Thulam, the nataka
          sala comes alive with Kathakali (Kerala’s classical art form)
          performances.
          <br />
          <br />
          Considered to be one of the Divya Desams or 108 sacred Vishnu temples in
          India, the presiding deity, Lord Vishnu, is depicted as reclining on
          Anantha, the hooded Serpent. The works of the Tamil Azhvars (saints) have
          mentioned the Divya Desams as the holiest abodes of Lord Vishnu.
          <br />
          <br />
          In fact, Thiruvananthapuram, the capital city of Kerala is named after
          the presiding deity of the Sree Padmanabhaswamy Temple, who is also known
          as Anantha (one who reclines on the Serpent Anantha). ‘Thiruvananthapuram’
          translates to the Land of Sree Anantha Padmanabhaswamy.
          <br />
          <br />
          It is also believed that the Sree Padmanabhaswamy Temple is located at a
          place considered to be one among the seven Parasurama Kshetras. There are
          also references to the temple in ancient texts like the Puranas, viz. the
          Skanda Purana and Padma Purana. The holy tank that stands close to the
          temple is called Padma Theertham, meaning the 'lotus spring.'
          <br />
          <br />
          It was Marthanda Varma one of the most renowned erstwhile rulers of
          Travancore who did major renovations to the temple which gave it its
          present day structure and form. It was he who introduced the Bhadra
          Deepam and Murajapam festivals in the temple. Every six years the
          Murajapam (which literally means continuous chanting of prayers) festival,
          is still conducted in the temple.
          <br />
          <br />
          It was in 1750 that the kingdom of Travancore was dedicated to Lord
          Padmanabha by the then king Marthanda Varma. He vowed that the royal
          family will rule the State on behalf of the Lord and he and his
          descendants would serve the kingdom as Padmanabha Dasa or the Servant of
          Lord Padmanabha. Ever since the name of every Travancore king was
          preceded by the title Padmanabha Dasa. All donations offered by the
          kingdom of Travancore to Padmanabhaswamy were known as Thripadidanam. Even
          today the shrine is run by a trust headed by the erstwhile royal family
          of Travancore.
          <br />
          <br />
          The hallowed halls and sacred precincts of this magnificent temple have
          captivated devotees and visitors alike for centuries. Even today the Sree
          Padmanabhaswamy Temple is a testament to the rich legacy of the land.
        </p>
      </section>

      {/* Worship Timing */}
      <section className="padma-highlight">
        <h2>Worship Timing</h2>
        <p>
          Morning hours:
          <br />
          03:30 A.M. to 04:45 A.M. (Nirmalya Darshanam)
          <br />
          06:30 A.M. to 07:00 A.M.
          <br />
          08:30 A.M. to 10:00 A.M.
          <br />
          10:30 A.M. to 11:10 A.M.
          <br />
          11:45 A.M. to 12:00 P.M.
          <br />
          Evening hours:
          <br />
          04:30 P.M. to 06:15 P.M.
          <br />
          06:45 P.M. to 07:20 P.M.
          <br />
          Please note that the temple worship timings are subject to change during
          the festival occasion.
        </p>
      </section>

      {/* Dress Code */}
      <section className="padma-highlight padma-dresscode">
        <h2>Dress code to be followed at the temple:</h2>
        <p>
          Only Hindus are permitted inside the temple.
          <br />
          <br />
          There is a strict dress code that needs to be followed while entering the
          temple. Men need to wear mundu or dhoti (worn around the waist and going
          down up to the heels) and should not wear shirts of any kind.
          <br />
          <br />
          Women need to wear sari, mundum neriyathum (set-mundu), skirt and blouse,
          or half sari.
          <br />
          <br />
          Dhotis are available for rent at the temple entrance. Nowadays temple
          authorities allow wearing of dhotis over pants or churidhar to avoid
          inconvenience to the devotees.
        </p>
      </section>

      {/* Contact */}
      <section className="padma-contact">
        <h4>Contact</h4>
        <p>
          &#128205; Fort, Thiruvananthapuram - 695023
          <br />
          &#128383; +91 471 245 0233, 246 4606
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
