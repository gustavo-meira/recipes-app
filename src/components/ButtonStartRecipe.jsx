import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const ButtonStartRecipe = () => {
  const location = useLocation();
  const recipe = useContext(RecipeDetailContext);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  const recipeDone = doneRecipes.some(({ id }) => recipe.id === id);
  if (recipeDone) return null;

  let textButton = 'Iniciar Receita';

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const recipeInProgress = inProgressRecipes.some(({ id }) => recipe.id === id);
  if (recipeInProgress) textButton = 'Continuar Receita';

  return (
    <Link to={ `${location.pathname}/in-progress` }>
      <button type="button">{ textButton }</button>
    </Link>
  );
};

export default ButtonStartRecipe;
