import React from "react";

const HeroBanner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen w-full">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center h-full">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          World's Best Handcrafted Jewelry
        </h1>
        <div className="flex flex-wrap justify-center mt-12">
          <button className="px-8 py-3 m-2 text-lg border square
            bg-yellow-500 text-white 
            font-medium leading-tight uppercase rounded shadow-md 
            hover:bg-yellow-600 hover:shadow-lg 
            focus:bg-yellow-600 focus:shadow-lg 
            focus:outline-none focus:ring-0 
            active:bg-yellow-700 active:shadow-lg 
            transition duration-150 ease-in-out">
            Neckles
          </button>
          <button className="px-8 py-3 m-2 text-lg border square
            bg-yellow-500 text-white 
            font-medium leading-tight uppercase rounded shadow-md 
            hover:bg-yellow-600 hover:shadow-lg 
            focus:bg-yellow-600 focus:shadow-lg 
            focus:outline-none focus:ring-0 
            active:bg-yellow-700 active:shadow-lg 
            transition duration-150 ease-in-out">
            Rings
          </button>
          <button className="px-8 py-3 m-2 text-lg border square
            bg-yellow-500 text-white 
            font-medium leading-tight uppercase rounded shadow-md 
            hover:bg-yellow-600 hover:shadow-lg 
            focus:bg-yellow-600 focus:shadow-lg 
            focus:outline-none focus:ring-0 
            active:bg-yellow-700 active:shadow-lg 
            transition duration-150 ease-in-out">
            Bracelets
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
