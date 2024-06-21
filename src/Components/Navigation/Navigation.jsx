import React from "react";
import logocorss from "../../assets/logocross.svg";

const Navigation = () => {
  return (
    <div>
      <div className="navigation-container  flex justify-between  items-center mt-12  ml-16 min-w-xl ">
        <div className="logoandname flex  justify-center items-center   ml-5 ">
          <img src={logocorss} alt=" logo icon" />
          <p className=" text-4xl font-bold">
            Perfect<span className=" text-[#A17F74] ">Receipe</span>
          </p>
        </div>
        <div className="menus flex justify-center items-center mr-12">
          <div className=" hidden menuslist sm:flex  sm:gap-5   sm:text-lg ">
            <a href="/">Home</a>
            <a href="/">Recipe</a>
            <a href="/">Add Recipe</a>
            <a href="/">Blog </a>
            <a href="/">About Us</a>
          </div>
          <div className=" hidden  sm:flex   min-h-10 gap-8 ml-32  shrink-1">
            <button className="bg-[#E7EDE7]  min-w-32 rounded-lg">
              Log in
            </button>
            <button className="bg-[#B26357] min-w-32  rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
