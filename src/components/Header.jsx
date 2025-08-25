import React from "react";
import navFrame from "../assets/images/navFrame.png";

const Header = () => {
  return (
    <header className="w-full">
      <img 
        src={navFrame} 
        alt="Navigation Frame" 
        className="w-full h-auto object-cover"
      />
    </header>
  );
};

export default Header;