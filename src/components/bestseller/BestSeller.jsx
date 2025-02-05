import React from "react";
import "../bestseller/bestseller.css";
import Dress1 from "../../assets/vestidoblanco.png"; // Image path for the first dress
import Dress2 from "../../assets/vestidoblanco2.png"; // Image path for the second dress
import Dress3 from "../../assets/vestidorosa.png"; // Image path for the third dress

const BestSeller = () => {
  const products = [
    {
      id: 1,
      name: "Dreamy Dress",
      price: "$490.00",
      image: Dress1, 
    },
    {
      id: 2,
      name: "Wedding Passion Dress",
      price: "$490.00",
      image: Dress2, 
    },
    {
      id: 3,
      name: "Pink WS Dress",
      price: "$490.00",
      image: Dress3,
    },
  ];

  return (
    <section className="best-seller">
    <h2>Our Best Seller</h2>
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
            {/* Link to the page */}
            <a href={product.link} className="add-to-cart-button">
              + Add to cart
            </a>
          </div>
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
  );
};

export default BestSeller;
