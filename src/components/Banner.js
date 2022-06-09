import React from "react";
import profileImg from '../images/profile-pic.png';

const Banner = () => {
  return (
    <div>
      <div class="hero py-24 bg-indigo-100 mb-12">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={profileImg}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="Nasim Reza"
          />
          <div>
            <h1 class="text-4xl font-bold">
              Hi, I'm Md. Nasim Reza
            </h1>
            <p class="py-2 text-xl">
              MERN Stack Developer
            </p>

            <p className="py-6 font-poppins">
            A software enthusiast who is passionate about mastering computer science skills and expertise. Always enthusiastic to study new science-related technologies and wanting to work as a professional web developer.
            </p>
            <a
              href="Nasim_Reza_Resume.pdf"
              download="Nasim_Reza_Resume.pdf"
              class="btn btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
