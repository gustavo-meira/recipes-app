import React from 'react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientListCheckbox from '../components/RecipeIngredientListCheckbox';
import RecipeInstrucions from '../components/RecipeInstructions';

const InProgressRecipePage = () => (
  <RecipeDetailProvider>
    <RecipeHeader />
    <RecipeInstrucions />
    <RecipeIngredientListCheckbox />
  </RecipeDetailProvider>
);

export default InProgressRecipePage;
