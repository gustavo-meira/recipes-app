import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const ButtonFinishRecipe = ({ allIngredientsDones }) => {
  const recipe = useContext(RecipeDetailContext);

  const deleteRecipeInProgress = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const recipes = inProgressRecipes.filter(({ id }) => recipe.id !== id);
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipes));
  };

  const handleButtonFinishRecipe = () => {
    const { id, thumb, name } = recipe;
    const doneDate = new Date().toLocaleDateString();
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    doneRecipes.push({ id, thumb, name, doneDate });
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    deleteRecipeInProgress();
  };

  return (
    <Link to="/done-recipes">
      <button
        onClick={ handleButtonFinishRecipe }
        type="button"
        disabled={ !allIngredientsDones }
      >
        Finalizar Receita
      </button>
    </Link>
  );
};

ButtonFinishRecipe.propTypes = {
  allIngredientsDones: PropTypes.bool.isRequired,
};

export default ButtonFinishRecipe;
