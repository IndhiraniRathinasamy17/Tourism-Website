import React, { useState, useEffect } from "react";
import "./Recipeslides.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const slides = [
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe03.jpg", text: "Step 1" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe04.jpg", text: "Step 2" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe05.jpg", text: "Step 3" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe06.jpg", text: "Step 4" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe07.jpg", text: "Step 5" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe10.jpg", text: "Step 6" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe13.jpg", text: "Step 7" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe14.jpg", text: "Step 8" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe17.jpg", text: "Step 9" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe18.jpg", text: "Step 10" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe19.jpg", text: "Step 11" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe21.jpg", text: "Step 12" },
  { src: "https://c.ndtvimg.com/2022-12/rq79vpv_puttu_625x300_28_December_22.jpg", text: "Step 13" },
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slideshow-container">
      <img src={slides[currentIndex].src} alt={`Slide ${currentIndex}`} />
      <div className="caption">{slides[currentIndex].text}</div>
    </div>
  );
}

const slides1 = [
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe1.jpg", text: "Step 1" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe2.jpg", text: "Step 2" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe6.jpg", text: "Step 3" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe4.jpg", text: "Step 4" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe5.jpg", text: "Step 5" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe7.jpg", text: "Step 6" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe8.jpg", text: "Step 7" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe10.jpg", text: "Step 8" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe11.jpg", text: "Step 9" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe12.jpg", text: "Step 10" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe13.jpg", text: "Step 11" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe15.jpg", text: "Step 12" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe17.jpg", text: "Step 13" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe19.jpg", text: "Step 14" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe21.jpg", text: "Step 15" },
  { src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe23.jpg", text: "Step 16" },
];

function Slideshow1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides1.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slideshow-container">
      <img src={slides1[currentIndex].src} alt={`Slide ${currentIndex}`} />
      <div className="caption">{slides1[currentIndex].text}</div>
    </div>
  );
}

function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("food");

  const handleAddReview = () => {
  if (!input || !name) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please enter your name and review!",
    });
    return;
  }

  setReviews([...reviews, { name, text: input, type }]);
  setInput("");
  setName("");

  Swal.fire({
    icon: "success",
    title: "Review Added!",
    text: "Your review has been submitted successfully.",
    timer: 2000,
    showConfirmButton: false,
  });
};
const foodReviews = reviews.filter((r) => r.type === "food");
  const hotelReviews = reviews.filter((r) => r.type === "hotel");

  return (
    <div className="review-section">
      <h2>⭐ User Reviews</h2>
      <div className="review-tabs">
        <button onClick={() => setType("food")} className={type === "food" ? "active" : ""}>Food Review</button>
        <button onClick={() => setType("hotel")} className={type === "hotel" ? "active" : ""}>Hotel Review</button>
      </div>
      
       <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Write your ${type} review...`}
      />
      <button onClick={handleAddReview}>Submit</button>

      <div className="review-list">
        <h3>Food Reviews</h3>
        {foodReviews.length === 0 ? (
          <p>No food reviews yet.</p>
        ) : (
          <ul>
            {foodReviews.map((r, i) => (
              <li key={i}>
                <strong>{r.name}</strong>: {r.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="review-list">
        <h3>Hotel Reviews</h3>
        {hotelReviews.length === 0 ? (
          <p>No hotel reviews yet.</p>
        ) : (
          <ul>
            {hotelReviews.map((r, i) => (
              <li key={i}>
                <strong>{r.name}</strong>: {r.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Puttu() {
  const navigate=useNavigate();
  return (
    <div className="recipe-page">
      <h1>Puttu And Kadala Curry</h1>

      {/* Popular In */}
      <section className="popular-in">
        <h2>📍 Popular In</h2>
        <p>
          <b>Puttu and Kadala Curry</b> is one of Kerala’s most loved breakfast dishes, especially in the
          <b> Malabar region (Northern Kerala)</b>.
        </p>
        <ul>
          <li><b>Regions:</b> Kozhikode, Malappuram, Kannur, Kasaragod</li>
          <li><b>Special Twist:</b> Served with banana or ghee for extra flavor</li>
          <li><b>Cultural Note:</b> A staple in Malayali households and a must-try breakfast</li>
        </ul>
      </section>

      {/* Puttu Section */}
      <section className="recipe-card">
        <h3>Ingredients for Puttu</h3>
        <ul>
          <li>Coarse Rice Flour - 1 cup</li>
          <li>Grated Coconut - 1/2 cup</li>
          <li>Water - As Required</li>
          <li>Salt - To Taste</li>
        </ul>

        <h3>Method of Preparation</h3>
        <div className="method-container">
          <Slideshow />
          <ol>
            <li>Take 1 cup puttu flour in a mixing bowl.</li>
            <li>Add ⅓ teaspoon salt and mix well.</li>
            <li>Sprinkle water gradually and mix until crumbly.</li>
            <li>Layer grated coconut and flour alternately in the puttu maker.</li>
            <li>Steam for 6–9 minutes until cooked.</li>
            <li>Serve hot with Kadala Curry, bananas, or papadums.</li>
          </ol>
        </div>
      </section>

      {/* Kadala Curry Section */}
      <section className="recipe-card">
        <h3>Ingredients for Kadala Curry</h3>
        <ul>
          <li>Black Chickpea - 1 cup (soaked)</li>
          <li>Coconut Oil - 2 tbsp</li>
          <li>Grated Coconut - 1/2 cup</li>
          <li>Shallots - 1/3 cup</li>
          <li>Spices: Mustard, Red Chilli, Coriander, Turmeric, Garam Masala</li>
        </ul>

        <h3>Method of Preparation</h3>
        <div className="method-container">
          <Slideshow1 />
          <ol>
            <li>Soak and pressure cook black chickpeas until tender.</li>
            <li>Make a smooth paste of grated coconut.</li>
            <li>Roast and grind spices for Kerala garam masala.</li>
            <li>Sauté shallots, ginger, chilies, and curry leaves in coconut oil.</li>
            <li>Add spice powders and coconut paste; sauté well.</li>
            <li>Add cooked chickpeas, water, and simmer.</li>
            <li>Serve hot with Puttu or Appam.</li>
          </ol>
        </div>
      </section>
      <ReviewSection />
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}
