import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Diamond from "../../images/slider.jpg";
import Diamond_one from "../../images/slider_one.jpg";
import Diamond_two from "../../images/slider_two.jpg";
import Diamond_three from "../../images/slider_three.jpg";
import "./slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var sectionStyle_one = {};
    return (
      <div className="Home" id="section1">
        <Slider {...settings}>
          <div className="item">
            <div style={{ backgroundImage: `url(${Diamond})` }}>
              <h3>1</h3>
            </div>
          </div>
          <div className="item">
            <div style={{ backgroundImage: `url(${Diamond_one})` }}>
              <h3>2</h3>
            </div>
          </div>
          <div className="item">
            <div style={{ backgroundImage: `url(${Diamond_two})` }}>
              <div style={sectionStyle_one} />
              <h3>3</h3>
            </div>
          </div>
          <div className="item">
            <div style={{ backgroundImage: `url(${Diamond_three})` }}>
              <h3>4</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
