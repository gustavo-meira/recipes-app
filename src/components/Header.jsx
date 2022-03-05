import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import userIcon from '../assets/images/user.svg';
import searchIcon from '../assets/images/search-icon.svg';

const Header = ({ searchButton }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const changeShowSearchInput = () => {
    setShowSearchInput((value) => !value);
  };

  return (
    <header>
      <Link to="/profile">
        <img src={ userIcon } alt="Icone do usuario" data-cy="profile-button" />
      </Link>
      <h2 data-cy="app-title">Recipes App</h2>
      {
        searchButton && (
          <button type="button" data-cy="search-button" onClick={ changeShowSearchInput }>
            <img src={ searchIcon } alt="Icone de busca" />
          </button>
        )
      }
      { showSearchInput && <SearchBar /> }
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
