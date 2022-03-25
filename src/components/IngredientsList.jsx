import React, { useContext } from 'react';
import IngredientsContext from '../contexts/IngredientsContext';
import IngredientItem from './IngredientItem';

const IngredientsList = () => {
  const ingredients = useContext(IngredientsContext);

  return (
    <ul>
      {
        ingredients.map((ingredient) => (
          <IngredientItem key={ ingredient } ingredient={ ingredient } />
        ))
      }
    </ul>
  );
};

export default IngredientsList;
