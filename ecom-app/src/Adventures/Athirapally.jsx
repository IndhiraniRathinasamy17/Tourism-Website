import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Slideshow.css";
import Swal from "sweetalert2";

export default function Athirapally() {
  const navigate=useNavigate();
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [rating, setRating] = useState(0); // ⭐ current selected rating
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("athirapallyReviews")) || [];
    setReviews(storedReviews);
  }, []);

  const goToBooking = (mode,place) => {
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
    localStorage.setItem("athirapallyReviews", JSON.stringify(updatedReviews));

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
        <img src="https://www.dtpcthrissur.com/uploads/picture_gallery/gallery_images/athirapilly-1920x1080-20230427135244797331.webp" alt="padmanabhaswamy temple"/>
        <div className="padma-hero-overlay"></div>
        <div className="padma-hero-text">Athirapally Falls 
          <div className="padma-hero-sub">The largest waterfall in Kerala, the Athirappilly Falls is also widely renowned as the "Niagara of India”.</div>
        </div>
      </div>

      <section className="padma-section">
        <p>There are times in life when you stand before a natural miracle and feel humbled by its magnificence, grandeur and sheer beauty. Witnessing the mighty Athirappilly waterfalls is one such experience you shouldn’t miss out on.<br/><br/>
The sight of water crashing down from an incredible height of 80 feet is enough to leave you spellbound. <br/><br/>
Located at the entrance to the Sholayar forest ranges, Athirappilly is at a distance of 63km from Thrissur district and is a treat to any nature lover. Set amidst lush green forest cover, even the trek to the waterfalls is a feast to the senses. A perennial picnic spot, the surrounding areas are ideal for walks and to spend quality time with loved ones. <br/><br/>
The Vazhachal Waterfalls which is located at a distance of less than 5km from Athirappilly is yet another hotspot for all visitors. Not only is Vazhachal a sight to behold but it is also home to exotic flora and fauna that has people hastening to the area throughout the year. A bird watcher’s paradise, it is common to get sightings of rare birds like four different endangered species of the Hornbill among others. This is said to be the only place in the western ghats where they thrive. Though this is a place filled with endangered and endemic fauna and flora as well, it is the avian species found here that is the highlight of the destination. It is therefore a much sought after destination for ornithologists.<br/><br/> 
Unlike the Athirappilly Falls which is vertical, at the Vazhachal Falls water rushes along a bed of rocks. While the sight is inviting, it is important to exercise caution as these alluring rocks are extremely slippery, and the waters, tricky.<br/><br/>
The grandeur of both the waterfalls is best enjoyed in the Monsoon season when the water flow is at its highest but the most magical time to visit them is during winter when the soothing weather and the light mist that wraps itself around these waterfalls lend it a mystical appearance. It is also the time when the chances of wildlife and avian sightings are at their highest and the flora at its most vibrant.<br/><br/>
The waterfalls and their surrounding areas are equally ideal and alluring for those who prefer to unwind, saunter around and surrender to the sheer beauty of Nature as well as those who seek adventurous and challenging treks.<br/><br/>
The trip to Athirappilly and Vazhachal waterfalls is an experience in itself. To feel the low rumble of the massive waterfalls from a distance grow bigger, louder and more intense as one draws closer, the enchanting sight of a torrent of water tumbling over massive rocks and a cliff, the cool misty water spray that fills the air, every bit of the experience etches in one’s heart memories that are sure to last a lifetime. <br/><br/>
Close your eyes. Tune into this exquisite orchestra and surrender to the miracles of nature.
</p></section>
<section className="padma-highlight">
        <h2>Visiting Hours 🕓</h2>
        <p>
          8:00 AM – 6:00 PM <br />
          Entry Fee: <br/>Rs.50 (Adults)<br/> Rs.15 (Children)<br/> Rs.150 (Foreigners)
        </p>
      </section>

      {/* Best Time */}
      <section className="padma-highlight">
        <h2>Best Time to Visit</h2>
        <p>
          The best time to visit Athirapally is during the monsoon (June – September) when the falls
          are in full glory.<br/> However, the winter months (October – February) also provide a pleasant
          climate for sightseeing.
        </p>
      </section>


<h2 className="padma-reach-title">How To Reach</h2>
  <div className="transport-container">
    <div className="transport-box">
      <p><strong>&#128652; By Bus</strong><br />
      Chalakudy KSRTC Bus Stand, about 31 km away |<br/>
      <button onClick={() => goToBooking('bus','Chalakudy KSRTC Bus Stand')}>Bus Details</button>
      </p>
    </div>

    <div className="transport-box">
      <p><strong>&#128748; By Flight</strong><br />
      Cochin International Airport, about 41.2 km away<br/>
      <button onClick={() => goToBooking('flight','Cochin International Airport')}>Flight Details</button>
      </p>
    </div>

    <div className="transport-box">
      <p><strong>&#128646; By Train</strong><br />
      Chalakudy Railway Station, about 32.3 km away<br/>
      <button onClick={() => goToBooking('train','Chalakudy Railway Station')}>Train Details</button>
      </p>
    </div>
  </div>

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
      <input type="text" placeholder="Enter your name..." value={reviewName} onChange={(e) => setReviewName(e.target.value)} className="review-input"/>
      <textarea placeholder="Write your review..." value={reviewText} onChange={(e) => setReviewText(e.target.value)}/>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const starValue = index + 1;
          return (
            <span key={starValue} className={`star ${starValue <= (hover || rating) ? "filled" : ""}`} onClick={() => setRating(starValue)}onMouseEnter={() => setHover(starValue)} onMouseLeave={() => setHover(rating)}>
              &#9733;
            </span>
          );
          })}
      </div>
      <button onClick={handleSubmitReview}>Submit Review</button>
    </div>
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
  </div>
  )
}

