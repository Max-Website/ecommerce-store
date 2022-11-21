import React from "react";

const HeroBanner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center h-full">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          World's Best Handcrafted Jewelry
        </h1>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold border square dark:text-gray-50 dark:border-gray-700">
            Neckles
          </button>
          <button className="px-8 py-3 m-2 text-lg font-semibold border square dark:text-gray-50 dark:border-gray-700">
            Rings
          </button>
          <button className="px-8 py-3 m-2 text-lg font-semibold border square dark:text-gray-50 dark:border-gray-700">
            Bracelets
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
