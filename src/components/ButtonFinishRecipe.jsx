import React from 'react';
import PropTypes from 'prop-types';

const ButtonFinishRecipe = ({ ingredientsDones }) => {
  delete ingredientsDones.id;

  const allDone = Object.values(ingredientsDones).every((ingredient) => ingredient);

  return (
    <button type="button" disabled={ !allDone }>
      Finalizar Receita
    </button>
  );
};

ButtonFinishRecipe.propTypes = {
  ingredientsDones: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default ButtonFinishRecipe;
