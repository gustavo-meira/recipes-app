import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientsList from '../components/RecipeIngredientsList';
import RecipeInstructions from '../components/RecipeInstructions';

const DetailsRecipePage = () => {
  window.document.title = 'Recipes App - Tela de detalhes da receita';

  return (
    <RecipeDetailProvider>
      <RecipeHeader />
      <RecipeIngredientsList />
      <RecipeInstructions />
    </RecipeDetailProvider>
  )
};

export default DetailsRecipePage;
