import React, { useEffect } from "react";
import { urlFor } from "../../lib/client";

function ProductCard({ item }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div
      className="flex justify-center rounded shadow-lg transform transition duration-500 hover:scale-105"
      style={{ marginRight: "10px" }}
    >
      <div className="rounded-lg shadow-lg bg-white w-full">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={urlFor(item.image[0])}
            alt={item.name}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
          />
        </a>
        <div className="p-3">
          <h5 className="text-gray-900 text-md font-small mb-2">
            {item.name}
          </h5>
          <p>{formatter.format(item.price)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
