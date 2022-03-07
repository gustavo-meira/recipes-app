import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';

const DetailsRecipePage = () => (
  <RecipeDetailProvider>
    <RecipeHeader />
  </RecipeDetailProvider>
);

export default DetailsRecipePage;
