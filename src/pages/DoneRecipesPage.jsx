import React from 'react';
import Header from '../components/Header';
import DoneRecipesList from '../components/DoneRecipesList';

const DoneRecipesPage = () => (
  <>
    <Header searchButton={ false } />
    <DoneRecipesList />
  </>
);

export default DoneRecipesPage;
