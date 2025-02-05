import React from "react";
import "../featuredcollections/featuredcollections.css";

// Import images from the assets folder
import Image1 from "../../assets/collect1.png";
import Image2 from "../../assets/collect3.png";
import Image3 from "../../assets/collect4.png";
import Image4 from "../../assets/collect2.png";
import Image5 from "../../assets/collect5.png";

// Define collections with imported images
const collections = [
  {
    id: 1,
    title: "Colorful Office Series",
    image: Image1,
    className: "card-1",
  },
  {
    id: 2,
    title: "BeonJamu Made Special Series",
    image: Image2,
    className: "card-2", // Large card
  },
  {
    id: 3,
    title: "Sunny Top Series",
    image: Image3,
    className: "card-3",
  },
  {
    id: 4,
    title: "Top YSL Series",
    image: Image4,
    className: "card-4",
  },
  {
    id: 5,
    title: "Elegant Dresses Series",
    image: Image5,
    className: "card-5",
  },
];

const FeaturedCollections = () => {
  return (
    <div className="featured-collections">
      <h2>Our Featured Collections</h2>
      <div className="collections-grid">
        {collections.map((collection) => (
          <div key={collection.id} className={`collection-card ${collection.className}`}>
            <img src={collection.image} alt={collection.title} />
            <div className="overlay">
              <p>{collection.title}</p>
              <div className="arrow-container">
                {/* The arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-arrow"
                >
                  <path d="M12 19l7-7-7-7"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
