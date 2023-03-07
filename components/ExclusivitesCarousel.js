import React, { Component } from "react";
import Slider from "react-slick";
import ExclusivitesCard from "./ExclusivitesCard"

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.exclusivites = props.exclusivites
    this.avis = props.avis
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
          {this.props.exclusivites.map((exclusivite) => (<div><ExclusivitesCard exclusivite={exclusivite} /></div>))}
        </Slider>
      </div>
    );
  }
}