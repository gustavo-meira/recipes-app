import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientsList from '../components/RecipeIngredientsList';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipeVideo from '../components/RecipeVideo';
import RecipeRecomendations from '../components/RecipeRecomendations';
import ButtonStartRecipe from '../components/ButtonStartRecipe';

const DetailsRecipePage = () => {
  window.document.title = 'Recipes App - Tela de detalhes da receita';

  return (
    <RecipeDetailProvider>
      <RecipeHeader />
      <RecipeIngredientsList />
      <RecipeInstructions />
      <RecipeVideo />
      <RecipeRecomendations />
      <ButtonStartRecipe />
    </RecipeDetailProvider>
  )
};

export default DetailsRecipePage;
