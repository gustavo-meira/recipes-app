import React from 'react';
import PropTypes from 'prop-types';

const FavoriteRecipeCard = ({ recipe }) => {
  const {
    name,
    thumb,
    recipeType,
    id,
  } = recipe;

  const handleButtonClick = () => {
    window.location.href = `${recipeType}/${id}`;
  };

  return (
    <button onClick={ handleButtonClick } type="button">
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
