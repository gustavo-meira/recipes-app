import React from 'react';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';

const MainRecipesPage = () => (
  <>
    <h1>Pagina principal das receitas de comidas e bebidas</h1>
    <Header />
    <CategoryList />
    <RecipeList />
  </>
);

export default MainRecipesPage;
