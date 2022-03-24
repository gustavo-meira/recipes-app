import React from 'react';
import FavoriteRecipeList from '../components/FavoriteRecipeList';
import Header from '../components/Header';

const FavoriteRecipesPage = () => (
  <>
    <Header searchButton={ false } />
    <FavoriteRecipeList />
  </>
);

export default FavoriteRecipesPage;
