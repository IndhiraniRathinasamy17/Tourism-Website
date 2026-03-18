import React, { useState } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const packages = [
  {
    id: 1,
    title: "Munnar & Thekkady - 4 Days",
    price: "₹18,000",
    image: "https://www.kerala.com/userfiles/1544171705_thekkady.jpg",
    description: "Explore the lush green tea gardens and wildlife of Munnar & Thekkady.",
  },
  {
    id: 2,
    title: "Alleppey Houseboat - 3 Days",
    price: "₹15,000",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Relax on a luxury houseboat, enjoying Kerala’s beautiful backwaters.",
  },
  {
    id: 3,
    title: "Kovalam & Varkala Beach - 5 Days",
    price: "₹22,000",
    image: "https://theroamingshoes.com/wp-content/uploads/2020/10/DSC_0299.jpg",
    description: "A perfect beach vacation with stunning views and water sports.",
  },
  {
    id: 4,
    title: "Wayanad Nature Retreat - 6 Days",
    price: "₹28,000",
    image: "https://www.trawell.in/admin/images/upload/210243717Glass-bridge.jpg",
    description: "Enjoy misty hills, waterfalls, and wildlife in Wayanad’s dense forests.",
  },
  {
    id: 5,
    title: "Heritage & Culture Tour - 7 Days",
    price: "₹35,000",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/padmanabha-swamy-temple-thiruvananthapuram-kerala-1-attr-hero?qlt=82&ts=1727367640712",
    description: "Visit historical sites, ancient temples, and cultural landmarks of Kerala.",
  },
  {
    id: 6,
    title: "Full Kerala Experience - 10 Days",
    price: "₹50,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFA6oXprDxpIZM93HsdeCgtbpLg9yZJkxKA&s",
    description: "A complete journey through Kerala’s top tourist attractions.",
  }
];

const PackageDetails = () => {
  const navigate = useNavigate();

  // Store reviews separately for each package
  const [reviews, setReviews] = useState({
    1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  });

  const [reviewInputs, setReviewInputs] = useState({
    name: "",
    rating: 5,
    comment: "",
    packageId: 1
  });

  const handleBookNow = (pkg) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
      sessionStorage.setItem("intendedPath", "/booking");
      localStorage.setItem("selectedPackage", JSON.stringify(pkg));

      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to continue booking.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    localStorage.setItem("selectedPackage", JSON.stringify(pkg));
    navigate("/booking");
  };

  const handleReviewSubmit = (pkgId) => {
    if (!reviewInputs.name || !reviewInputs.comment) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please enter your name and comment.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setReviews(prev => ({
      ...prev,
      [pkgId]: [...prev[pkgId], {
        name: reviewInputs.name,
        rating: reviewInputs.rating,
        comment: reviewInputs.comment
      }]
    }));

    setReviewInputs({ ...reviewInputs, name: "", comment: "" });

    Swal.fire({
      icon: "success",
      title: "Review Submitted",
      text: "Thank you for your feedback!",
      confirmButtonColor: "#3085d6",
    });
  };

  const getAverageRating = (pkgId) => {
    const pkgReviews = reviews[pkgId];
    if (!pkgReviews.length) return 0;
    const sum = pkgReviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / pkgReviews.length;
  };

  return (
    <div className="container">
      <h1 className="title">Kerala Tour Packages</h1>
      <div className="grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="card">
            <img src={pkg.image} alt={pkg.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{pkg.title}</h2>
              <p className="card-description">{pkg.description}</p>
              <div className="card-footer">
                <span className="price">{pkg.price}</span>
                <button className="book-button" onClick={() => handleBookNow(pkg)}>Book Now</button>
              </div>

              {/* Overall Rating */}
              <div className="overall-rating">
                Overall Rating:{" "}
                <span className="stars">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < Math.round(getAverageRating(pkg.id)) ? "★" : "☆"
                  ).join("")}
                </span>{" "}
                ({getAverageRating(pkg.id).toFixed(1)} / 5)
              </div>

              {/* Review Submission */}
              <div className="review-form">
                <h4>Leave a Review</h4>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={reviewInputs.name}
                  onChange={(e) => setReviewInputs({...reviewInputs, name: e.target.value, packageId: pkg.id})}
                />
                <select
                  value={reviewInputs.rating}
                  onChange={(e) => setReviewInputs({...reviewInputs, rating: parseInt(e.target.value)})}
                >
                  <option value={5}>5 - Excellent</option>
                  <option value={4}>4 - Good</option>
                  <option value={3}>3 - Average</option>
                  <option value={2}>2 - Poor</option>
                  <option value={1}>1 - Bad</option>
                </select>
                <textarea
                  placeholder="Your Comment"
                  value={reviewInputs.comment}
                  onChange={(e) => setReviewInputs({...reviewInputs, comment: e.target.value})}
                ></textarea>
                <button onClick={() => handleReviewSubmit(pkg.id)}>Submit Review</button>
              </div>

              {/* Display Reviews */}
              <div className="reviews">
                <h4>Reviews</h4>
                {reviews[pkg.id].length === 0 ? (
                  <p>No reviews yet.</p>
                ) : (
                  reviews[pkg.id].map((rev, idx) => (
                    <div key={idx} className="review">
                      <strong>{rev.name}</strong>{" "}
                      <span className="stars">
                        {Array.from({ length: 5 }, (_, i) => (i < rev.rating ? "★" : "☆")).join("")}
                      </span>
                      <p>{rev.comment}</p>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;
