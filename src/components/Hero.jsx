import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Hero.css";

const Hero = () => {
const navigate = useNavigate();
  const gotomenu= () =>{
      navigate('/menu')
    }

  return (
    <section className="hero">
      <div className="hero-main">
        <div className="hero-content">
          <h1>
            <span className="red">Cooking</span><br />
            <span>Made </span>
            <span className="yellow">Easy:</span><br />
            <span className="yellow">Explore</span><br />
            <span className="red">Random</span><br />
            <span className="red">Recipes</span><br />
            <span>Daily.</span>
          </h1>
          <button className="menu-button" onClick={gotomenu}>Check out menu</button>
        </div>

        <div className="hero-image">
          <img src="/images/home_img.png" alt="Ramen Dish" />
        </div>
      </div>

      <div className="footer-text">
         <span className="yellow">Made By </span>
         <span className="red">Vishal Pargai</span>
      </div>
    </section>
  );
};

export default Hero;

