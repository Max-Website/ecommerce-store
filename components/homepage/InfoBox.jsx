import React from "react";
import InfoItem from "./InfoItem";

const InfoBox = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full" style={{ backgroundColor: '#fff7e0', padding: '2rem 0rem' }}>
      <div className="w-full max-w-6xl flex justify-center items-center flex-wrap">
        <InfoItem title={'Instagram'} desc={'Stay up to date with out release'} />
        <InfoItem title={'Fast Shipping'} desc={'Stay up to date with out release'} />
        <InfoItem title={'Need Assistance'} desc={'Stay up to date with out release'}  />
        <InfoItem title={'View Return Policy'} desc={'Stay up to date with out release'} />
      </div>
    </div>
  );
};

export default InfoBox;
