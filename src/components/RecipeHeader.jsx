import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';
import ButtonShareRecipe from './ButtonShareRecipe';

const RecipeHeader = () => {
  const recipe = useContext(RecipeDetailContext);

  return (
    <header>
      <img src={ recipe.thumb } alt={ recipe.name } />
      <h2>{ recipe.name }</h2>
      {
        recipe?.tags?.map((tag) => (
          <li key={ tag }>{ tag }</li>
        ))
      }
      <ButtonShareRecipe />
    </header>
  );
};

export default RecipeHeader;
