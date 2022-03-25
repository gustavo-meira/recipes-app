import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const IngredientItem = ({ ingredient }) => {
  const { pathname } = useLocation();
  const recipeType = pathname.includes('foods') ? 'foods' : 'drinks';

  return (
    <li>
      <Link to={ `/${recipeType}?ingredient=${ingredient}` }>
        { ingredient }
      </Link>
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default IngredientItem;
