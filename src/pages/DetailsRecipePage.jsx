import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';

const DetailsRecipePage = () => {
  window.document.title = 'Recipes App - Tela de detalhes da receita';

  return (
    <RecipeDetailProvider>
      <RecipeHeader />
    </RecipeDetailProvider>
  )
};

export default DetailsRecipePage;
