import React from 'react';
import { useParams } from 'react-router-dom';
import dishes from '../data/dishes';
import "./RecipeDetails.css";

const RecipeDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const dish = dishes.find(d => d.name === decodedName);

  if (!dish) return <h2>Recipe not found</h2>;

  return (
    <div className="recipe-detail">
    <div>
        <h1>{dish.name}</h1>
        <img src={dish.image} alt={dish.name} style={{ width: '310px' }} />
        <h3>Ingredients:</h3>
        <ul>
          {dish.ingredients?.map((ing, idx) => <li key={idx}>{ing}</li>)}
        </ul>
    </div>
    <div>
      <h3>Instructions:</h3>
        <p>{dish.recipe}</p>
    
    <div className='videos'>
        {dish.video && (
            <div>
             <h3>Watch the recipe:</h3>
             <iframe width="560" height="315" src={dish.video} title={dish.name} allowFullScreen></iframe>
         </div>
         )}
    </div>
</div>
    </div>
  );
};

export default RecipeDetail;
