import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoItem = ({ title, desc, faIcon }) => {
  return (
    <div className="flex justify-center items-centers min-h-5 min-w-[350px] w-[50%]">
      <div className="flex w-10 justify-center items-align" style={{ padding: '0 2rem'}}>
        <FontAwesomeIcon
          icon={faIcon}
          style={{ fontSize: 40, color: "darkbblue" }}
        />
      </div>
      <div>
        <h6 className="text-2xl">{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoItem;
