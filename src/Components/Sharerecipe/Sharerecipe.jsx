import React from "react";
import Receipeimage from "../../assets/Receipeimage.jpg";

const Sharerecipe = () => {
  return (
    <div className="m-28 ">
      <div className="text-5xl font-bold my-10">Share Receipe</div>
      <div className="sharerecipe-container flex gap-10">
        <div>
          <img
            src={Receipeimage}
            alt="image"
            className=" grow min-h-auto content-center min-h-[300px] min-w-max"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className=" text-5xl font-bold">
            Share Your <span className=" text-[#6A3831]"> Receipes </span>
          </h1>
          <p className="text-[18px] font-bold text-[#898992] ml-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            repellat eos fuga dicta. Harum ipsa quia impedit quisquam quasi
            architecto.
          </p>
          <button className=" bg-[#B26357] min-w-36 min-h-12   rounded-lg my-5 text-white m-auto">
            Create New Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sharerecipe;
