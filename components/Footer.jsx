import React, { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    let date = new Date().getFullYear();
    setCurrentYear(date);
  }, []);

  return (
    <div className="min-h-5 flex justify-center items-center">
      <p>© Copyright {currentYear} Designs by Max</p>
    </div>
  );
};

export default Footer;
