import React from "react";
import {
  FaCopyright,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import logocross from "../../assets/logocross.svg";
const Footer = () => {
  return (
    <div className="min-h-80 bg-[#E5E5E5]">
      <div>
        <div className="main-footer ">
          <div className="first-part flex  justify-center items-center mx-28">
            <div className="w-1/3 p-8">
              <div className="flex  justify-start items-start ">
                <img src={logocross} alt="icon" className="" />
                <p className=" text-4xl font-bold">
                  Perfect<span className=" text-[#A17F74] ">Receipe</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                atque voluptatibus praesentium iure asperiores aspernatur
                perspiciatis mollitia harum qui quasi! Distinctio, quidem.
                Asperiores, quos fugit.
              </p>
            </div>
            <div className="w-1/3 flex justify-start items-start gap-4">
              <div className="flex flex-col ">
                <p className="font-bold">Quick Links</p>
                <a href="/">Home</a>
                <a href="/">Recipes</a>
                <a href="/">Blog</a>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Quick Links</p>
                <a href="/">Share Recipe</a>
                <a href="/">About Us</a>
                <a href="/">Contact</a>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Legal</p>
                <a href="/">Terms of Use</a>
                <a href="/">Privacy and cookies</a>
              </div>
            </div>
            <div className="w-1/3 flex flex-col  justify-center items-center pt-16 ">
              <h1 className="text-2xl font-bold">Newsletter</h1>
              <p className="font-medium">
                Subscribe to our newsletter to get more free tips
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" Enter Your Email "
                className="h-10 min-w-[23rem] rounded-md mt-5"
              />
              <button className="bg-[#B26357]   h-10 min-w-[23rem] mt-5 rounded-lg   text-white ">
                Subscribe
              </button>
            </div>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between items-end mx-28">
            <div>
              <p className="flex justify-center items-center">
                <FaCopyright /> 2024 All rights reserved.
              </p>
            </div>
            <div className="flex justify-between items-center gap-10">
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
