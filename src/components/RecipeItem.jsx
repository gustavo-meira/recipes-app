import React from 'react';
import PropTypes from 'prop-types';

const recipeType = {
  meals: {
    name: 'strMeal',
    image: 'strMealThumb',
  },
  drinks: {
    name: 'strDrink',
    image: 'strDrinkThumb',
  },
};

const RecipeItem = ({ recipe, type }) => {
  const recipeName = recipe[recipeType[type].name];
  const recipeImage = recipe[recipeType[type].image];

  return (
    <div>
      <img src={ recipeImage } alt={ recipeName } />
      <h2>{ recipeName }</h2>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipeItem;
