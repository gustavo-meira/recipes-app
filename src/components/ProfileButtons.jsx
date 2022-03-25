import React from 'react';

const ProfileButtons = () => {
  const { email } = JSON.parse(localStorage.getItem('user')) || { email: '' };

  return (
    <div>
      <h2>{ email || 'Email não encontrado' }</h2>
      <button type="button">Done Recipes</button>
      <button type="button">Favorite Recipes</button>
      <button type="button">Logout</button>
    </div>
  );
};

export default ProfileButtons;
