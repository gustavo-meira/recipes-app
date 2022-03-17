import React from 'react';
import PropTypes from 'prop-types';

const DoneRecipeCard = ({ recipe }) => {
  const { name, thumb, doneDate } = recipe;

  return (
    <section>
      <img src={ thumb } alt={ name } />
      <h2>{ name }</h2>
      <p>{ `Receita Concluida em: ${doneDate}` }</p>
    </section>
  );
};

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    thumb: PropTypes.string,
    doneDate: PropTypes.string,
  }).isRequired,
};

export default DoneRecipeCard;
