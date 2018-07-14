import React from "react";
import GetStarted from "./GetStarted";
import Discover from "./Discover";
import HeaderSlide from "./HeaderSlide";
import Testimonial from "./Testimonial";
import Autocomplete from "./Autocomplete";
import "./Home.css";

const Home = props => {
  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-div">
          <HeaderSlide />
        </div>
      </div>
      <div className="discover-container">
        <Discover />
      </div>
      <div
        className="testimonial-container"
        style={{
          backgroundImage: `url(${"../public/img/testimonial-bg.jpg"})`
        }}
      >
        <Testimonial />
      </div>
      <div className="getStarted-container">
        <GetStarted />
      </div>
      <div className="container">
        <Autocomplete />
      </div>
    </div>
  );
};

export default Home;
