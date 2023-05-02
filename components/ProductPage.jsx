import React from "react";
import ProductItem from "./productitem/ProductItem";

export const ProductPage = ({ classification, data }) => {
  return (
    <div className="max-w-7xl w-full  m-auto">
      <div className="title pl-10 ml-20 mt-20 pt-20">
        <h1 className={"text-4xl"}>{classification}</h1>
      </div>

      <div className="max-w-7xl flex flex-row flex-wrap justify-center items-center">
        {data.map((item) => (
          <ProductItem classification={classification} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
