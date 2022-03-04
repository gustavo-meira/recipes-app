import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe, type }) => {
  let recipeName;
  if (type === 'meals') {
    recipeName = recipe.strMeal;
  } else {
    recipeName = recipe.strDrink;
  }
  return (
    <h2>{ recipeName }</h2>
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
