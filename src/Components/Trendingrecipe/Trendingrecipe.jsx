import React from "react";
import logo1 from "../../assets/Receipeimage.jpg";
import logo2 from "../../assets/user.jpg";
import logo3 from "../../assets/calory.png";

const Card = () => {
  return (
    <div className="m-28">
      <h1 className="text-5xl font-bold ">Trending Receipe</h1>
      <a
        href="/"
        className="flex flex-row-reverse text-[#a66d6a] text-lg  font-semibold mr-6"
      >
        View More
      </a>
      <div className=" mt-3 grid grid-cols-3 gap-x-6 gap-y-6  ">
        <div className="h-[355px] w-[335px] rounded-lg overflow-hidden border  shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <img
              src={logo1}
              alt="logo"
              className="w-full h-[200px] object-fill"
            />
            <p className="ml-3">***** star</p>
            <h3 className="text-[20px] ml-3">Onion Rings</h3>
          </div>
          <div className="flex  justify-start items-center gap-4 p-[10px]  ">
            <img
              src={logo2}
              alt="user "
              className="h-[60px] w-[60px] rounded-full"
            />
            <h4 className=" m-0  shrink">Alex Martin</h4>
            <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md p-2">
              <img src={logo3} alt="cal" className="h-[30px] w-[40px] " />
              <h5>200 cal</h5>
            </div>
          </div>
        </div>
        <div className="h-[355px] w-[335px] rounded-lg overflow-hidden border  shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <img
              src={logo1}
              alt="logo"
              className="w-full h-[200px] object-fill"
            />
            <p className="ml-3">***** star</p>
            <h3 className="text-[20px] ml-3">Onion Rings</h3>
          </div>
          <div className="flex  justify-start items-center gap-4 p-[10px]  ">
            <img
              src={logo2}
              alt="user "
              className="h-[60px] w-[60px] rounded-full"
            />
            <h4 className=" m-0  shrink">Alex Martin</h4>
            <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md p-2">
              <img src={logo3} alt="cal" className="h-[30px] w-[40px] " />
              <h5>200 cal</h5>
            </div>
          </div>
        </div>
        <div className="h-[355px] w-[335px] rounded-lg overflow-hidden border  shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <img
              src={logo1}
              alt="logo"
              className="w-full h-[200px] object-fill"
            />
            <p className="ml-3">***** star</p>
            <h3 className="text-[20px] ml-3">Onion Rings</h3>
          </div>
          <div className="flex  justify-start items-center gap-4 p-[10px]  ">
            <img
              src={logo2}
              alt="user "
              className="h-[60px] w-[60px] rounded-full"
            />
            <h4 className=" m-0  shrink">Alex Martin</h4>
            <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md p-2">
              <img src={logo3} alt="cal" className="h-[30px] w-[40px] " />
              <h5>200 cal</h5>
            </div>
          </div>
        </div>
        <div className="h-[355px] w-[335px] rounded-lg overflow-hidden border  shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <img
              src={logo1}
              alt="logo"
              className="w-full h-[200px] object-fill"
            />
            <p className="ml-3">***** star</p>
            <h3 className="text-[20px] ml-3">Onion Rings</h3>
          </div>
          <div className="flex  justify-start items-center gap-4 p-[10px]  ">
            <img
              src={logo2}
              alt="user "
              className="h-[60px] w-[60px] rounded-full"
            />
            <h4 className=" m-0  shrink">Alex Martin</h4>
            <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md p-2">
              <img src={logo3} alt="cal" className="h-[30px] w-[40px] " />
              <h5>200 cal</h5>
            </div>
          </div>
        </div>
        <div className="h-[355px] w-[335px] rounded-lg overflow-hidden border  shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <img
              src={logo1}
              alt="logo"
              className="w-full h-[200px] object-fill"
            />
            <p className="ml-3">***** star</p>
            <h3 className="text-[20px] ml-3">Onion Rings</h3>
          </div>
          <div className="flex  justify-start items-center gap-4 p-[10px]  ">
            <img
              src={logo2}
              alt="user "
              className="h-[60px] w-[60px] rounded-full"
            />
            <h4 className=" m-0  shrink">Alex Martin</h4>
            <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md p-2">
              <img src={logo3} alt="cal" className="h-[30px] w-[40px] " />
              <h5>200 cal</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
