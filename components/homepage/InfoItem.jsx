import React from "react";

const InfoItem = ({ title, desc }) => {
  return (
    <div className="flex justify-center items-centers min-h-5 min-w-[350px] w-[50%]">
      <div className="flex w-10 justify-center items-align" style={{ padding: '0 2rem'}}>
      </div>
      <div>
        <h6 className="text-2xl">{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoItem;
