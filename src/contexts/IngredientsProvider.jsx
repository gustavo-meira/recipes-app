import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import IngredientsContext from './IngredientsContext';
import fetchIngredients from '../api/fetchIngredients';

const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const { pathname } = useLocation();
  const recipeType = pathname.includes('foods') ? 'foods' : 'drinks';

  useEffect(() => {
    const type = recipeType === 'foods' ? 'meals' : 'drinks';
    fetchIngredients(type)
      .then((fetchedIngredients) => setIngredients(fetchedIngredients));
  }, [pathname, recipeType]);

  const currIngredients = ingredients.map((ingredient) => (
    ingredient.strIngredient || ingredient.strIngredient1
  ));

  return (
    <IngredientsContext.Provider value={ currIngredients }>
      { children }
    </IngredientsContext.Provider>
  );
};

IngredientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IngredientsProvider;
