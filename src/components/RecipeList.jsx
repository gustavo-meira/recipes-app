import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchRecipes from '../api/fetchRecipes';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const type = location.pathname.includes('foods') ? 'meals' : 'drinks';
  const recipesPerPage = 12;

  useEffect(() => {
    setPaginationIndex(0);
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

  useEffect(() => {
    if (recipes.length > recipesPerPage) {
      let index = 1;
      let currRecipesLength = recipes.length;
      while (currRecipesLength >= recipesPerPage) {
        index += 1;
        currRecipesLength -= recipesPerPage;
      }
      const paginationArray = Array.from(Array(index), (_, i) => i + 1);
      setPagination(paginationArray);
    }
  }, [recipes]);

  const startRecipesPagination = paginationIndex * recipesPerPage;
  const endRecipesPagination = (paginationIndex + 1) * recipesPerPage;
  const currentRecipesPagination = recipes.slice(
    startRecipesPagination, endRecipesPagination,
  );

  return (
    <>
      <ul>
        {
          currentRecipesPagination.map((recipe, index) => (
            <RecipeItem
              key={ index }
              type={ type }
              recipe={ recipe }
            />
          ))
        }
      </ul>
      {
        pagination.map((pageNumber) => (
          <button
            type="button"
            key={ pageNumber }
            onClick={ () => {
              setPaginationIndex(pageNumber - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } }
          >
            { pageNumber }
          </button>
        ))
      }
    </>
  );
};

export default RecipeList;
