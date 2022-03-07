import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const RecipeInstructions = () => {
  const recipe = useContext(RecipeDetailContext);

  return (
    <p>
      { recipe.instructions }
    </p>
  );
};

export default RecipeInstructions;
