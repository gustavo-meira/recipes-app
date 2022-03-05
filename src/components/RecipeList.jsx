import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchRecipes from '../api/fetchRecipes';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const type = location.pathname.includes('foods') ? 'meals' : 'drinks';

  useEffect(() => {
    if (location.search) {
      const [currentTerm, currentSearch] = location.search.split('=');
      fetchRecipes(type, { currentTerm, currentSearch })
        .then((data) => {
          if (data.length > 0) {
            setRecipes(data);
          } else {
            alert('Nada foi encontrado.');
          }
        });
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
