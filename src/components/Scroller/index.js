import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Scroller = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slider-container">
        <div className="main-heading-container">
          <h1 className="main-heading">
            Why Thousands of Financial Advisors Already Choose Us
          </h1>
        </div>
        <Slider {...settings}>
          <div className="each-container">
            <img
              src="https://www.advisorwebsites.com/hubfs/personalized-websites.png"
              className="logo"
            />
            <h3 className="about">
              Personalized websites and content experiences for your target
              market.
            </h3>
            <p className="description">
              Personalized websites and content experiences for your target
              market.
            </p>
            <button className="button">Know more</button>
          </div>

          <div className="each-container1">
            <img
              src="https://www.advisorwebsites.com/hubfs/digital-marketing.png"
              className="logo"
            />
            <h3 className="about">
              Only the best digital marketing tools to grow your business.
            </h3>
            <p className="descrpition">
              Robust, customizable content library, social media sharing, blog
              scheduling, automated email marketing, and more.
            </p>
            <button className="button">Know more</button>
          </div>

          <div className="each-container">
            <img
              src="https://www.advisorwebsites.com/hubfs/in-house-support.png"
              className="logo"
            />
            <h3 className="about">
              In-house support team of real human marketing experts!
            </h3>
            <p className="descrpition">
              We’re in this together, your partners, an extension of your team.
              Always here to ensure your success along the way.
            </p>
            <button className="button">Know more</button>
          </div>

          <div className="each-container1">
            <img
              src="https://www.advisorwebsites.com/hubfs/number-one-badge.svg"
              className="logo"
            />
            <h3>
              Personalized websites and content experiences for your target
              market.
            </h3>
            <p className="description">
              Personalized websites and content experiences for your target
              market.
            </p>
            <button className="button">Know more</button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Scroller;
