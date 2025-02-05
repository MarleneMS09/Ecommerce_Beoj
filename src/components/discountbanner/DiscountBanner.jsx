import React from "react";
import "../discountbanner/discountbanner.css";
import ModelImage from "../../assets/model.png"; // Path to the right-side model image
import Skirt from "../../assets/skirt.png"; // Path to skirt image 1
import HmLogo from "../../assets/hm.png"; // Path to H&M logo
import ObeyLogo from "../../assets/obey.png"; // Path to Obey logo
import ShopifyLogo from "../../assets/shopify.png"; // Path to Shopify logo
import LacosteLogo from "../../assets/lacoste.png"; // Path to Lacoste logo
import LevisLogo from "../../assets/levis.png"; // Path to Levis logo
import AmazonLogo from "../../assets/amazon.png"; // Path to Amazon logo

const DiscountBanner = () => {
  return (
    <section className="discount-banner-container">
      {/* Logo Section */}
      <div className="discount-banner-logos">
        <img src={HmLogo} alt="H&M" />
        <img src={ObeyLogo} alt="Obey" />
        <img src={ShopifyLogo} alt="Shopify" />
        <img src={LacosteLogo} alt="Lacoste" />
        <img src={LevisLogo} alt="Levis" />
        <img src={AmazonLogo} alt="Amazon" />
      </div>

      {/* Main Offer Section */}
      <div className="discount-banner-content">
        <div className="discount-banner-products">
          <img src={Skirt} alt="Skirt 1" />
        </div>

        <div className="discount-banner-details">
          <h1>Get 50% Off</h1>
          <p>
            For all new product purchases
            <br />
            Min. purchase Rp. 350,000
          </p>
          <button className="discount-banner-button">SHOP NOW</button>
        </div>

        <div className="discount-banner-model">
          <img src={ModelImage} alt="Model" />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
