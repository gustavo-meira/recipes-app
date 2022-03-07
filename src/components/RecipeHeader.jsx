import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const RecipeHeader = () => {
  const recipe = useContext(RecipeDetailContext);

  console.log(recipe);

  return (
    <header>
      <img src={ recipe.thumb } alt={ recipe.name } />
      <h2>{ recipe.name }</h2>
      {
        recipe?.tags?.map((tag) => (
          <li key={ tag }>{ tag }</li>
        ))
      }
    </header>
  );
};

export default RecipeHeader;
