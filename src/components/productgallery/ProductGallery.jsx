import React, { useState } from "react";
import "../productgallery/productgallery.css";

// Import images
import BlackHolidayDress from "../../assets/1.png";
import SunnyPink from "../../assets/2.png";
import RomanticElegancy from "../../assets/3.png";
import NightDressSTW from "../../assets/4.png";
import STRBrownyDress from "../../assets/5.png";
import FlowMTDress from "../../assets/6.png";


const categories = ["Top", "Bottom", "Dress", "Set", "Knit", "Outer"];

const products = [
  {
    id: 1,
    name: "Black Holiday Dress",
    price: "$490.00",
    image: BlackHolidayDress,
  },
  {
    id: 2,
    name: "Sunny Pink",
    price: "$490.00",
    image: SunnyPink,
  },
  {
    id: 3,
    name: "Romantic Elegancy",
    price: "$490.00",
    image: RomanticElegancy,
  },
  {
    id: 4,
    name: "Night Dress STW",
    price: "$490.00",
    image: NightDressSTW,
  },
  {
    id: 5,
    name: "STR Browny Dress",
    price: "$490.00",
    image: STRBrownyDress,
  },
  {
    id: 6,
    name: "Flow MT Dress",
    price: "$490.00",
    image: FlowMTDress,
  },
];

const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Top");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = products.filter((_, index) => 
    index < itemsPerPage * currentPage && index >= itemsPerPage * (currentPage - 1)
  );

  const maxPages = 4;

  return (
    <div className="product-gallery">
      <h2>Our Products</h2>
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? "active" : ""}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        {[...Array(maxPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === maxPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
