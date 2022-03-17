import React from 'react';
import PropTypes from 'prop-types';

const ButtonFinishRecipe = ({ allIngredientsDones }) => (
  <button type="button" disabled={ !allIngredientsDones }>
    Finalizar Receita
  </button>
);

ButtonFinishRecipe.propTypes = {
  allIngredientsDones: PropTypes.bool.isRequired,
};

export default ButtonFinishRecipe;
