import React from 'react';
import { Link } from 'react-router-dom';

const ExploreButtons = () => (
  <>
    <Link to="foods">
      <button type="button">
        Explorar por comidas
      </button>
    </Link>
    <Link to="drinks">
      <button type="button">
        Explorar por bebidas
      </button>
    </Link>
  </>
);

export default ExploreButtons;
