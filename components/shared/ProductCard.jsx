import React from "react";

function ProductCard() {
  return (
    <div class="flex justify-center rounded shadow-lg transform transition duration-500 hover:scale-105" style={{ marginRight: '10px' }}>
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            class="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p>$250.00</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
