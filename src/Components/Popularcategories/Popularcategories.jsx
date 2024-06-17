import React from "react";

import image1 from "../../assets/Cherry-Berry Smoothie Bowl.png";
import image2 from "../../assets/Chicken Ranch Wrap.png";
import image3 from "../../assets/Green Goddess Wrap Is a Light & Simple.png";
import image4 from "../../assets/Green smoothie.png";

const Popularcategories = () => {
  return (
    <div className="m-28">
      <h1 className="text-5xl font-bold ">Explore Receipe</h1>
      <a
        href="/"
        className="flex flex-row-reverse text-[#a66d6a] text-lg  font-semibold mr-6"
      >
        View More
      </a>
      <div className="mt-3 grid grid-cols-4 gap-x-6 gap-y-6  justify-items-center items-center ">
        <div className="card-pop p-4 ">
          <img
            src={image1}
            alt="Cherry-Berry Smoothie Bowl.png"
            className="rounded-full h-44 w-44 py-4"
          />
          <h4 className="flex  justify-center items-center">
            Breakfast Recipes
          </h4>
        </div>
        <div className="card-pop p-4 ">
          <img
            src={image2}
            alt="Cherry-Berry Smoothie Bowl.png"
            className="rounded-full h-44 w-44 py-4"
          />
          <h4 className="flex  justify-center items-center">
            Breakfast Recipes
          </h4>
        </div>
        <div className="card-pop p-4 ">
          <img
            src={image3}
            alt="Cherry-Berry Smoothie Bowl.png"
            className="rounded-full h-44 w-44 py-4"
          />
          <h4 className="flex  justify-center items-center">
            Breakfast Recipes
          </h4>
        </div>
        <div className="card-pop p-4 ">
          <img
            src={image4}
            alt="Cherry-Berry Smoothie Bowl.png"
            className="rounded-full h-44 w-44 py-4"
          />
          <h4 className="flex  justify-center items-center">
            Breakfast Recipes
          </h4>
        </div>
        <div className="card-pop p-4 ">
          <img
            src={image3}
            alt="Cherry-Berry Smoothie Bowl.png"
            className="rounded-full h-44 w-44 py-4"
          />
          <h4 className="flex  justify-center items-center">
            Breakfast Recipes
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Popularcategories;
