import React from "react";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { data } from "./data";
import HotCard from "./components/HotCard";
import Heading from "./components/Heading";
import ProductReview from "./components/ProductReview";
import Video from "./components/Video";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavCard from "./components/NavCard";
const App = () => {
  console.log(data.hotAccessories);
  return (
    <div>
      <PreNavbar />
      <Navbar data={data} />
  
      <Home />
      <Routes>
        <Route
          path="/music"
          element={
            <HotCard
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          path="/smartDevice"
          element={
            <HotCard
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotCard
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyle"
          element={
            <HotCard
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotCard
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEW"/>
     <ProductReview productReviews={data.productReviews}/>
     <Heading text="VIDEOS"/>
    <Video video={data.videos}/>
    <Heading text='IN THE PRESS'/>
    <Banner banner={data.banner}/>
    <Footer footer={data.footer}/>
    </div>
  );
};

export default App;
