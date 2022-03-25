import React from 'react';
import ExploreByButtons from '../components/ExploreByButtons';
import Header from '../components/Header';

const ExploreRecipesPage = () => (
  <>
    <Header searchButton={ false } />
    <ExploreByButtons />
  </>
);

export default ExploreRecipesPage;
