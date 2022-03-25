import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ExploreByButtons = () => {
  const { pathname } = useLocation();
  const recipeType = pathname.includes('foods') ? 'foods' : 'drinks';

  return (
    <div>
      <Link to="ingredients">
        <button type="button">
          Explore by ingredients
        </button>
      </Link>
      <button type="button">
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
