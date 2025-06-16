import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import dishes from '../data/dishes';

const Menu = () => {
  return (
    <div className='menu-container'>
      <h1 className='menu-heading'>MENU</h1>
      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div className="menu-item" key={index}>
            <Link 
              to={`/recipe/${encodeURIComponent(dish.name)}`} 
              className="menu-link"
            >
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <h3>{dish.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
