import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientsList from '../components/RecipeIngredientsList';

const DetailsRecipePage = () => {
  window.document.title = 'Recipes App - Tela de detalhes da receita';

  return (
    <RecipeDetailProvider>
      <RecipeHeader />
      <RecipeIngredientsList />
    </RecipeDetailProvider>
  )
};

export default DetailsRecipePage;
