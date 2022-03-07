import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const RecipeIngredientsList = () => {
  const recipe = useContext(RecipeDetailContext);

  return (
    <ol>
      {
        recipe.ingredients.map((ingredient, index) => (
          <li key={ index }>{ ingredient }</li>
        ))
      }
    </ol>
  );
};

export default RecipeIngredientsList;
