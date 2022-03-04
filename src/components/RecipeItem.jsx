import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const recipeType = {
  meals: {
    name: 'strMeal',
    image: 'strMealThumb',
    id: 'idMeal',
  },
  drinks: {
    name: 'strDrink',
    image: 'strDrinkThumb',
    id: 'idDrink',
  },
};

const RecipeItem = ({ recipe, type }) => {
  const location = useLocation();

  const recipeName = recipe[recipeType[type].name];
  const recipeImage = recipe[recipeType[type].image];
  const recipeId = recipe[recipeType[type].id];

  return (
    <Link to={ `${location.pathname}/${recipeId}` }>
      <img src={ recipeImage } alt={ recipeName } />
      <h2>{ recipeName }</h2>
    </Link>
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
