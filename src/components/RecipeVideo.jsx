import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const RecipeVideo = () => {
  const recipe = useContext(RecipeDetailContext);

  if (recipe.video === '') return null;

  const ytLink = `https://www.youtube.com/embed/${recipe.video.split('v=')[1]}`;

  return (
    <iframe
      width="560"
      height="315"
      src={ ytLink }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
    </iframe>
  );
};

export default RecipeVideo;
