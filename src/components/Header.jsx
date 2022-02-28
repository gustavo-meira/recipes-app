import React from 'react';
import userIcon from '../assets/images/user.svg';
import searchIcon from '../assets/images/search-icon.svg';

const Header = () => (
  <header>
    <img src={ userIcon } alt="Icone do usuario" data-cy="profile-button" />
    <h2 data-cy="app-title">Recipes App</h2>
    <img src={ searchIcon } alt="Icone de busca" data-cy="search-button" />
  </header>
);

export default Header;
