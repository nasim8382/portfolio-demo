import React from "react";
import bannerImg from '../images/banner.jpg';

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{backgroundImage: `url(${bannerImg})`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h2 className="mb-8 text-3xl font-bold ">I Am Md. Nasim Reza</h2>
            <h1 className="mb-16 text-6xl font-bold ">MERN Stack Developer</h1>
            <a 
            href="Nasim_Reza_Resume.pdf"
              download="Nasim_Reza_Resume.pdf"
               className="cursor-pointer rounded-full bg-gray-600 px-7 py-3 text-center border text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-white hover:text-black">
                 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
