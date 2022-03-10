import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const RecipeIngredientListCheckbox = () => {
  const recipe = useContext(RecipeDetailContext);

  return (
    <ul>
      {
        recipe.ingredients.map((ingredient, index) => (
          <li key={ index }>
            <label htmlFor={ `ingredient-${index}` }>
              <input
                onChange={ (e) => console.log(e.target.checked) }
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
