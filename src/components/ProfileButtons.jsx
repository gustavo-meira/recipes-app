import React from 'react';
import { Link } from 'react-router-dom';

const ProfileButtons = () => {
  const { email } = JSON.parse(localStorage.getItem('user')) || { email: '' };

  return (
    <div>
      <h2>{ email || 'Email não encontrado' }</h2>
      <Link to="/done-recipes">
        <button type="button">Done Recipes</button>
      </Link>
      <Link to="/favorite-recipes">
        <button type="button">Favorite Recipes</button>
      </Link>
      <button type="button">Logout</button>
    </div>
  );
};

export default ProfileButtons;
