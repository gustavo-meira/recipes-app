import React, { useContext, useState, useEffect } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';
import ButtonFinishRecipe from './ButtonFinishRecipe';

const RecipeIngredientListCheckbox = () => {
  const recipe = useContext(RecipeDetailContext);
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const currRecipeProgress = inProgressRecipes.find(({ id }) => id === recipe.id);
  const [ingredientsDones, setIngredientsDones] = useState(
    currRecipeProgress || { id: recipe.id },
  );
  console.log(ingredientsDones);

  useEffect(() => {
    const recipeInProgress = inProgressRecipes.some(
      (inProgressRecipe) => inProgressRecipe.id === recipe.id,
    );
    if (recipeInProgress) {
      const currIndex = inProgressRecipes.findIndex(({ id }) => id === recipe.id);
      inProgressRecipes[currIndex] = ingredientsDones;
    } else {
      inProgressRecipes.push(ingredientsDones);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [ingredientsDones, recipe]);

  const handleCheckInput = (event) => {
    const { target: { id: ingredientId, checked } } = event;
    setIngredientsDones({ ...ingredientsDones, [ingredientId]: checked });
  };

  return (
    <>
      <ul>
        {
          recipe.ingredients.map((ingredient, index) => (
            <li key={ index }>
              <label htmlFor={ `ingredient-${index}` }>
                <input
                  onChange={ handleCheckInput }
                  id={ `ingredient-${index}` }
                  type="checkbox"
                  checked={ ingredientsDones[`ingredient-${index}`] || false }
                />
                { ingredient }
              </label>
            </li>
          ))
        }
      </ul>
      <ButtonFinishRecipe ingredientsDones={ ingredientsDones } />
    </>
  );
};

export default RecipeIngredientListCheckbox;
