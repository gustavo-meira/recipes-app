import React from 'react';
import FavoriteRecipeCard from './FavoriteRecipeCard';

const FavoriteRecipeList = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  return (
    <div>
      {
        favoriteRecipes.map((recipe) => (
          <FavoriteRecipeCard key={ recipe.id } recipe={ recipe } />
        ))
      }
    </div>
  );
};

export default FavoriteRecipeList;
