import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import fetchRecipeDetails from '../api/fetchRecipeDetails';
import RecipeDetailContext from './RecipeDetailContext';
import getIngredientsFromRecipe from '../utils/getIngredientsFromRecipe';

const types = {
  meals: {
    id: 'idMeal',
    thumb: 'strMealThumb',
    name: 'strMeal',
  },
  drinks: {
    id: 'idDrink',
    thumb: 'strDrinkThumb',
    name: 'strDrink',
  },
};

const RecipeDetailProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const { pathname } = useLocation();
  const params = useParams();
  const type = pathname.includes('foods') ? 'meals' : 'drinks';

  useEffect(() => {
    fetchRecipeDetails(type, params.id)
      .then((data) => setRecipe(data[0]));
  }, [type, params]);

  const treatedRecipe = {
    id: recipe?.[types[type].id],
    thumb: recipe?.[types[type].thumb],
    name: recipe?.[types[type].name],
    ingredients: getIngredientsFromRecipe(recipe),
    tags: recipe?.strTags?.split(','),
    instructions: recipe?.strInstructions,
    video: recipe?.strYoutube,
    nationality: recipe?.strArea,
    category: recipe?.strCategory,
  };

  return (
    <RecipeDetailContext.Provider value={ treatedRecipe }>
      { children }
    </RecipeDetailContext.Provider>
  );
};

RecipeDetailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeDetailProvider;
