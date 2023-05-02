import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import { client } from "../../lib/client";
import { urlFor } from "../../lib/client";

function ProductItem({ classification, item }) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const dispatch = useDispatch();

  return (
    <Link key={item._id} href={`/${classification.toLowerCase()}/${item._id}`}>
      <div
        key={item._id}
        className=" w-80 m-2 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <img
            className="w-full"
            src="bracelet.jpg"
            alt="Ring"
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        ) : (
          <img
            className="w-full"
            src={urlFor(item.image[0])}
            alt="Ring"
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        )}
        <div className="px-6 py-4">
          <h4 className="font-bold text-xl mb-2 truncate">{item.name}</h4>
          <p className="text-gray-700 text-base">${item.price.toFixed(2)}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
