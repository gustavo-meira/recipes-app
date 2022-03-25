import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import fetchRandomRecipe from '../api/fetchRandomRecipe';

const ExploreByButtons = () => {
  const { pathname } = useLocation();
  const navigateTo = useNavigate();
  const recipeType = pathname.includes('foods') ? 'foods' : 'drinks';

  const handleSurpriseButton = async () => {
    const type = recipeType === 'foods' ? 'meals' : 'drinks';
    const recipe = await fetchRandomRecipe(type);
    console.log(recipe);
    const id = recipe.idMeal || recipe.idDrink;
    navigateTo(`/${recipeType}/${id}`);
  };

  return (
    <div>
      <Link to="ingredients">
        <button type="button">
          Explore by ingredients
        </button>
      </Link>
      <button onClick={ handleSurpriseButton } type="button">
        Surprise me
      </button>
      {
        recipeType === 'foods' && (
          <Link to="nationalities">
            <button type="button">
              Explore by nationalities
            </button>
          </Link>
        )
      }
    </div>
  );
};

export default ExploreByButtons;
