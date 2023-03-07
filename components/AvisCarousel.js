import React, { Component } from "react";
import Slider from "react-slick";
import AvisCard from "./AvisCard"

export default class Responsive2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
      <div className="w-11/12 mx-auto">
        <Slider {...settings}>
          {this.props.avis.map((e) => (<div><AvisCard key={e.id} avis={e} /></div>))}
        </Slider>
      </div>
    );
  }
}