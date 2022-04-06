import React, { Component } from "react";
import Slider from "react-slick";
import GraphItem from "./CardItem";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
          <GraphItem
              src="https://img.icons8.com/dotty/80/26e07f/waste.png"
              text=""
              label="Lixo"
              path="/lixo"
            />
          </div>
          <div>
          <GraphItem
              src="https://img.icons8.com/dotty/80/26e07f/waste.png"
              text=""
              label="Lixo"
              path="/lixo"
            />
          </div>
          <div>
          <GraphItem
              src="https://img.icons8.com/dotty/80/26e07f/waste.png"
              text=""
              label="Lixo"
              path="/lixo"
            />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}