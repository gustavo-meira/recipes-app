import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import basicFetchList from '../api/basicFetch';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const type = location.pathname.includes('foods') ? 'meals' : 'drinks';

  useEffect(() => {
    basicFetchList(type)
      .then((data) => setRecipes(data));
  }, [type]);

  console.log(recipes);

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
