import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <footer style={{backgroundColor: "rgb(25, 25, 25)"}} className="footer footer-center p-10 text-white rounded">
      <div className="grid grid-flow-col gap-4 text-xl">
        <a href="#about" className="link link-hover">About</a>
        <a href="#projects" className="link link-hover">Projects</a>
        <a href="#blogs" className="link link-hover">Blogs</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/nasim8382" target="_blank" className="hover:text-gray-600">
                  <GrGithub/>
          </a>
          <a href="https://www.linkedin.com/in/nasim8382/" target="_blank" className="hover:text-gray-600">
                  <FaLinkedinIn/>
          </a>
          <a href="https://twitter.com/nasim8382" target="_blank" className="hover:text-gray-600">
                  <TiSocialTwitter/>
          </a>  
          <a href="https://www.facebook.com/nasim8382/" target="_blank" className="hover:text-gray-600">
                  <TiSocialFacebook/>
          </a>  
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Nasim Reza</p>
      </div>
    </footer>
  );
};

export default Footer;
