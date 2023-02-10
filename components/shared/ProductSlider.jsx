import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../shared/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    const { productData } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        <div className="mr-2 my-5">
          <ProductCard />
        </div>

        <div className="mr-2 my-5">
          <ProductCard />
        </div>

        <div className="mr-2 my-5">
          <ProductCard />
        </div>

        <div className="mr-2 my-5">
          <ProductCard />
        </div>

        <div className="mr-2 my-5">
          <ProductCard />
        </div>

        <div className="mr-2 my-5">
          <ProductCard />
        </div>
      </Slider>
    );
  }
}
