import React, { useEffect, useState } from "react";
import Responsive from "../shared/ProductSlider";
import HeaderButton from "../shared/HeaderButton";

export default function SliderComponent({ product, productData = [] }) {

  return (
      <div className="w-full">
        <h3>Featured {product}</h3>
        <div className="w-full px-7">
          <Responsive productData={productData} />
        </div>
        <div className="w-full flex justify-center items-center py-4">
          <HeaderButton text={product} route={product} />
        </div>
      </div>
  );
};
