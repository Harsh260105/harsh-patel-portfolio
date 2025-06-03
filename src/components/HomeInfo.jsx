import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Harsh Patel</span>
      <span className="waving-hand">👋</span>
      <br />A Computer Engineer with a passion for Innovation.
    </h1>
  ),
  2: (
    <InfoBox
      text="A tech ethusiast exploring various fields of computer engineering "
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Explore my projects and see what I've been working on"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for contacting me"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
