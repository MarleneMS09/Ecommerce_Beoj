import React from "react";
import "../seasoncollections/seasoncollections.css";
import SummerImage from "../../assets/summer.png";
import WinterImage from "../../assets/winter.png";
import SpringImage from "../../assets/spring.png";

const SeasonCollections = () => {
  const collections = [
    {
      season: "SUMMER",
      image: SummerImage,
      link: "/summer-collection", // Ruta de la página destino
    },
    {
      season: "WINTER",
      image: WinterImage,
      link: "/winter-collection",
    },
    {
      season: "SPRING",
      image: SpringImage,
      link: "/spring-collection",
    },
  ];

  return (
    <section className="season-collections">
      <h2>Season Collections</h2>
      <div className="collections-container">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <div className="image-container">
              {/* Imagen envuelta en un link */}
              <a href={collection.link} className="image-link">
                <img src={collection.image} alt={collection.season} />
              </a>
              <div className="sale-badge">
                <i className="fas fa-tag" style={{ marginRight: "5px" }}></i> SALE
              </div>
            </div>
            <h3>{collection.season}</h3>
            <a href={collection.link} className="read-more-button">
              Read more <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonCollections;
