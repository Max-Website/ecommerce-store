import React from "react";
import { faSearch, faTruck } from "@fortawesome/free-solid-svg-icons";
import InfoItem from "./InfoItem";

const InfoBox = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full">
      <div className="w-full max-w-6xl flex justify-start items-center">
        <InfoItem title={'Follow Us On Instagram'} desc={'Stay up to date with out release'} faIcon={faSearch} />
        <InfoItem title={'Fast Shipping'} desc={'Stay up to date with out release'} faIcon={faSearch} />
        <InfoItem title={'Need Assistance'} desc={'Stay up to date with out release'} faIcon={faSearch} />
        <InfoItem title={'View Return Policy'} desc={'Stay up to date with out release'} faIcon={faSearch} />
      </div>
    </div>
  );
};

export default InfoBox;
