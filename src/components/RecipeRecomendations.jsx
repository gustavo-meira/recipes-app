import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchRecipes from '../api/fetchRecipes';

const RecipeRecomendations = () => {
  const [recomendation, setRecomendations] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();
  const type = location.pathname.includes('foods') ? 'drinks' : 'meals';
  
  useEffect(() => {
    fetchRecipes(type)
    .then((data) => setRecomendations(data));
  }, [type]);
  
  if (recomendation.length === 0) return null;
  
  const nextIndex = imageIndex + 1 >= recomendation.length ? 0 : imageIndex + 1;
  const recomendationType = type === 'drinks' ? 'Drink' : 'Meal';
  
  const handleButtonNextImage = () => {
    setImageIndex((imageIndex) => {
      const nextImageIndex = imageIndex + 1;
      if (nextImageIndex >= recomendation.length) return 0;
      return nextImageIndex;
    });
  };

  const handleButtonPreviousImage = () => {
    setImageIndex((imageIndex) => {
      const previousImageIndex = imageIndex - 1;
      if (0 >= previousImageIndex) return recomendation.length - 1;
      return previousImageIndex;
    });
  };

  return (
    <div>
      <button onClick={ handleButtonPreviousImage } type="button">{ '<' }</button>
      <img
        src={ recomendation[imageIndex][`str${recomendationType}Thumb`] }
        alt={ `${recomendationType} recomendation for this recipe` }
      />
      <img
        src={ recomendation[nextIndex][`str${recomendationType}Thumb`] }
        alt={ `${recomendationType} recomendation for this recipe` }
      />
      <button onClick={ handleButtonNextImage } type="button">{ '>' }</button>
    </div>
  );
};

export default RecipeRecomendations;
