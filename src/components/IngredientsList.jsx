import React, { useContext } from 'react';
import IngredientsContext from '../contexts/IngredientsContext';

const IngredientsList = () => {
  const ingredients = useContext(IngredientsContext);

  return (
    <ul>
      {
        ingredients.map((ingredient, index) => (
          <li key={ index }>
            { ingredient }
          </li>
        ))
      }
    </ul>
  );
};

export default IngredientsList;
