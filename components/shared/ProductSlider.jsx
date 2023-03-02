import React from "react";
import Slider from "react-slick";
import ProductCard from "../shared/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Responsive({productData = []}) {
    const settings = {
      dots: true,
      infinite: productData.length > 4,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     infinite: productData.length > 4,
        //     dots: true,
        //   },
        // },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            infinite: productData.length > 4,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: productData.length > 4,
          },
        },
      ],
    };



  return (
    <Slider {...settings}>
      { productData.map((item, index)=> (
        <div className="mr-2 my-5" key={index}>
          <ProductCard item={item} />
        </div>
      ))}
    </Slider>
  );
}