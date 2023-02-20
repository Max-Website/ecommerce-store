import React from "react";

function ProductCard() {
  return (
    <div className="flex justify-center rounded shadow-lg transform transition duration-500 hover:scale-105" style={{ marginRight: '10px' }}>
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p>$250.00</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
