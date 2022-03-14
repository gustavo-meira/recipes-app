import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const RecipeIngredientListCheckbox = () => {
  const recipe = useContext(RecipeDetailContext);

  const handleCheckInput = (event) => {
    const { target: { id: ingredientId, checked } } = event;
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    const recipeInProgress = inProgressRecipes.some(
      (inProgressRecipe) => inProgressRecipe.id === recipe.id,
    );
    if (recipeInProgress) {
      const currIndex = inProgressRecipes.findIndex(({ id }) => id === recipe.id);
      inProgressRecipes[currIndex] = {
        ...inProgressRecipes[currIndex], [ingredientId]: checked,
      };
    } else {
      inProgressRecipes.push({
        id: recipe.id,
        [ingredientId]: checked,
      });
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  return (
    <ul>
      {
        recipe.ingredients.map((ingredient, index) => (
          <li key={ index }>
            <label htmlFor={ `ingredient-${index}` }>
              <input
                onChange={ handleCheckInput }
                id={ `ingredient-${index}` }
                type="checkbox"
              />
              { ingredient }
            </label>
          </li>
        ))
      }
    </ul>
  );
};

export default RecipeIngredientListCheckbox;
