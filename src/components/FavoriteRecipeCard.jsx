import React from 'react';
import PropTypes from 'prop-types';

const FavoriteRecipeCard = ({ recipe }) => {
  const {
    name,
    thumb,
  } = recipe;

  return (
    <button type="button">
      <img src={ thumb } alt={ name } />
      <h2>{ name }</h2>
    </button>
  );
};

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    recipeType: PropTypes.string,
    thumb: PropTypes.string,
  }).isRequired,
};

export default FavoriteRecipeCard;
