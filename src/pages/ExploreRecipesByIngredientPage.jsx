import React from 'react';
import Header from '../components/Header';
import IngredientsList from '../components/IngredientsList';
import IngredientsProvider from '../contexts/IngredientsProvider';

const ExploreRecipesByIngredientPage = () => (
  <>
    <Header searchButton={ false } />
    <IngredientsProvider>
      <IngredientsList />
    </IngredientsProvider>
  </>
);

export default ExploreRecipesByIngredientPage;
