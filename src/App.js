import React from 'react';
import Discount from './components/discount/Discount';
import Header from './components/header/Header';
import HeroSection from './components/herosection/HeroSection';
import SeasonCollections from './components/seasoncollections/SeasonCollections';
import BestSeller from './components/bestseller/BestSeller';
import DiscountBanner from './components/discountbanner/DiscountBanner';
import ProductGallery from './components/productgallery/ProductGallery';
import FeaturedCollections from './components/featuredcollections/FeaturedCollections';





function App() {
  return (
    <div>
    <Discount/>
    <Header/>
    <HeroSection/>
    <SeasonCollections/>
    <BestSeller/>
    <DiscountBanner/>
    <ProductGallery/>
    <FeaturedCollections/>
  


    </div>
  );
}

export default App;
