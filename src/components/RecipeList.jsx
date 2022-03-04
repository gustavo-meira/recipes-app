import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchRecipes from '../api/fetchRecipes';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const type = location.pathname.includes('foods') ? 'meals' : 'drinks';
  console.log(recipes);

  useEffect(() => {
    if (location.search) {
      const currentCategory = location.search.split('=')[1];
      fetchRecipes(type, currentCategory)
        .then((data) => setRecipes(data));
    } else {
      fetchRecipes(type)
        .then((data) => setRecipes(data));
    }
  }, [type, location]);

  return (
    <ul>
      {
        recipes.map((recipe, index) => (
          <RecipeItem
            key={ index }
            type={ type }
            recipe={ recipe }
          />
        ))
      }
    </ul>
  );
};

export default RecipeList;
