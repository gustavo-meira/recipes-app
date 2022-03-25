import React from 'react';
import PropTypes from 'prop-types';

const IngredientItem = ({ ingredient }) => (
  <li>
    { ingredient }
  </li>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default IngredientItem;
