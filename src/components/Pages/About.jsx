import React from "react";
import "./About.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-container">
      <h1>About FlavourFront</h1>
      <p>
        <strong>FlavourFront</strong> is a personal recipe website designed and
        developed by <strong>Vishal Pargai</strong>. It’s built for food lovers
        who want quick access to delicious recipes with simple steps and visual
        guidance.
      </p>

      <p>
        This website was developed using <strong>ReactJS</strong>, with custom
        routing and data stored locally without using any external APIs. From
        login functionality to recipe browsing and video tutorials — everything
        is done from scratch.
      </p>

      <p>
        Whether you are a beginner in the kitchen or a home chef, FlavourFront
        helps you cook confidently and creatively with dishes from around the
        world.
      </p>

      <p>
        <strong>Features:</strong>
        <br />
        - View a wide range of recipes with images
        <br />
        - Detailed ingredients and cooking instructions
        <br />
        - Watch embedded tutorial videos
        <br />- Login/signup for personalized experience
      </p>

      <p>
        Created as a learning and portfolio project to sharpen frontend
        development skills, FlavourFront combines a love for food and code into
        one flavorful experience!
      </p>

      <p className="about-footer">Thank you for visiting — happy cooking! 🍽️</p>

      <div className="socials">
        <h2>My socials:-</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/v.pargai/" target="_blank"><FaInstagram size={24}/></a>
          <a href="https://www.linkedin.com/in/Vishalpargai/" target="_blank"><FaLinkedin size={24} /></a>
          <a href="https://github.com/VishalPargai" target="_blank"><FaGithub size={24} /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
