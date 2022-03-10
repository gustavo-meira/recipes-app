import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientListCheckbox from '../components/RecipeIngredientListCheckbox';

const InProgressRecipePage = () => (
  <RecipeDetailProvider>
    <RecipeHeader />
    <RecipeIngredientListCheckbox />
  </RecipeDetailProvider>
);

export default InProgressRecipePage;
