import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavigationButtons = () => {
  return (
    <>
      <div className="buttons">
        <button className="button">Home</button>
        <button className="button">Projects</button>
      </div>
      <div className="social-media">
        <FaGithub className="social-media-icon"></FaGithub>
        <FaLinkedin className="social-media-icon"/>
        <button className="button">Let's Connect</button>
      </div>
    </>
  );
};

export default NavigationButtons;
