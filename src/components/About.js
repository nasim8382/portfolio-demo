import React from "react";
import profileImg from "../images/profile-pic.jpg";

const About = () => {
  return (
    <div>
      <div
        id="about"
        style={{ backgroundColor: "rgb(32, 32, 32)" }}
        className="py-24"
      >
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-white text-4xl text-center font-bold">
            About Me
          </h1>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={profileImg}
              className="w-80 md:w-96 rounded-lg shadow-2xl"
              alt="Nasim Reza"
            />
            <div className="px-5 md:px-12">
              <h1 className="text-4xl font-bold text-white mt-7 md:mt-0">Md. Nasim Reza</h1>
              <p className="py-6 text-white">
                A software enthusiast who is passionate about mastering computer
                science skills and expertise. Always enthusiastic to study new
                science-related technologies and wanting to work as a
                professional web developer.
              </p>
              <p className="text-white">
                I have got experience in HTML5, CSS, JavaScript, Bootstrap,
                Tailwind, React, React-Router, Node.js, Express.js, MongoDB,
                TypeScript, Firebase, Netlify, and Heroku. I have completed a
                professional web development course and developed some
                full-stack projects using ReactJs. Besides, I learned new
                technologies and tools which enabled me to incorporate some
                amazing features into my projects. I am a quick learner, adaptive and energetic person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
