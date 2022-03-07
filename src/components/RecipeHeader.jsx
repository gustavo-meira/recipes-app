import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';
import ButtonFavoriteRecipe from './ButtonFavoriteRecipe';
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
      <ButtonFavoriteRecipe
        name={ recipe.name }
        thumb={ recipe.thumb }
        id={ recipe.id }
      />
    </header>
  );
};

export default RecipeHeader;
