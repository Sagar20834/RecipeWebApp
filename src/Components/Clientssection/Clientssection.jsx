import React from "react";
import logo from "../../assets/nescafe.svg";

const Clientssection = () => {
  return (
    <div className="mx-80 my-40">
      <div className=" flex justify-between max-h-18 gap-4">
        <img src={logo} alt="logo1" className="h-12  w-12" />
        <img src={logo} alt="logo2" className="h-12  w-12" />
        <img src={logo} alt="logo3" className="h-12  w-12" />
        <img src={logo} alt="logo4" className="h-12  w-12" />
        <img src={logo} alt="logo5" className="h-12  w-12" />
        <img src={logo} alt="logo6" className="h-12  w-12" />
        <img src={logo} alt="logo7" className="h-12  w-12" />
      </div>
    </div>
  );
};

export default Clientssection;
