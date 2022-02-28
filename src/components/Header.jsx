import React from 'react';
import PropTypes from 'prop-types';
import userIcon from '../assets/images/user.svg';
import searchIcon from '../assets/images/search-icon.svg';

const Header = ({ searchButton }) => {
  
  
  return (
    <header>
      <img src={ userIcon } alt="Icone do usuario" data-cy="profile-button" />
      <h2 data-cy="app-title">Recipes App</h2>
      {
        searchButton && (
          <img src={ searchIcon } alt="Icone de busca" data-cy="search-button" />
        )
      }
    </header>
  );
};

Header.propTypes = {
  searchButton: PropTypes.bool,
};

Header.defaultProps = {
  searchButton: true,
};

export default Header;
