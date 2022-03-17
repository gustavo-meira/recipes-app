import React from 'react';
import PropTypes from 'prop-types';

const DoneRecipeCard = ({ recipe }) => {
  const { name, thumb, doneDate, recipeType, id } = recipe;

  const handleButtonClick = () => {
    window.location.href = `${recipeType}/${id}`;
  };

  return (
    <button type="button" onClick={ handleButtonClick }>
      <section>
        <img src={ thumb } alt={ name } />
        <h2>{ name }</h2>
        <p>{ `Receita Concluida em: ${doneDate}` }</p>
      </section>
    </button>
  );
};

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    thumb: PropTypes.string,
    doneDate: PropTypes.string,
    recipeType: PropTypes.string,
  }).isRequired,
};

export default DoneRecipeCard;
