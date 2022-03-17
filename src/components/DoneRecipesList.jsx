import React from 'react';
import DoneRecipeCard from './DoneRecipeCard';

const DoneRecipes = () => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  return (
    <div>
      {
        recipes.map((recipe) => (
          <DoneRecipeCard key={ recipe.id } recipe={ recipe } />
        ))
      }
    </div>
  );
};

export default DoneRecipes;
