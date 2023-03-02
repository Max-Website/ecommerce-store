import React from "react";
import HeaderButton from "../shared/HeaderButton";

const HeroBanner = () => {
  return (
    <section className="main-header-section dark:bg-gray-500 dark:text-gray-100 w-full" style={{ height: '80vh'}}>
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center h-full">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Worlds Best Handcrafted Jewelry
        </h1>
        <div className="flex flex-wrap justify-center mt-12">
          <HeaderButton text={"Neckles"} route={"/neckles"} />
          <HeaderButton text={"Rings"} route={"/rings"} />
          <HeaderButton text={"Bracelets"} route={"/bracelets"} />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
