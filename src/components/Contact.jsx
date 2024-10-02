import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration='1000'
        
        >
          <a href="https://www.istagram.com" className="items">
            <FaSquareInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="items">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="items">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithubSquare className="icon" />
          </a>
          <a href="mailto:riazqazi002@gmail.com" target="_blank" className="items">
            <SiGmail className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
