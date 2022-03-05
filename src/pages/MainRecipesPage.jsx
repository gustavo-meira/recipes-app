import React from 'react';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';

const MainRecipesPage = () => (
  <>
    <Header />
    <CategoryList />
    <RecipeList />
    <Footer />
  </>
);

export default MainRecipesPage;
