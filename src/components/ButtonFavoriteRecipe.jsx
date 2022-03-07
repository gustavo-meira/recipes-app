import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart  } from 'react-icons/ai';

const ButtonFavoriteRecipe = ({ id, name, thumb }) => {
  const [favoritedRecipe, setFavoritedRecipe] = useState(false);
  const recipe = {
    id,
    name,
    thumb,
  };

  const icon = favoritedRecipe ? <AiFillHeart /> : <AiOutlineHeart />;

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const isFavorite = favoriteRecipes.some(({ id: idRecipe }) => idRecipe === id);
    if (isFavorite) setFavoritedRecipe(true);
  }, [id]);

  const handleButtonFavorite = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (favoritedRecipe) {
      const filteredRecipes = favoriteRecipes.filter(
        ({ id: idRecipe }) => id !== idRecipe,
      );
      localStorage.setItem('favoriteRecipes', JSON.stringify(filteredRecipes));
    } else {
      localStorage.setItem('favoriteRecipes',
      JSON.stringify([...favoriteRecipes, recipe]));
    }
    setFavoritedRecipe((currFavorited) => !currFavorited);
  };

  return (
    <button type="button" onClick={ handleButtonFavorite }>
      { icon }  
    </button>
  );
};

ButtonFavoriteRecipe.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default ButtonFavoriteRecipe;
