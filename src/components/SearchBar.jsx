import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const [searchBy, setSearchBy] = useState('ingredient');
  const [inputSearch, setInputSearch] = useState('');

  const handleButtonSearch = () => {
    if (searchBy === 'first-letter' && inputSearch.length > 1) {
      return alert('Pesquise por apenas uma letra!');
    }
    navigateTo(`${location.pathname}?${searchBy}=${inputSearch}`);
    setInputSearch('');
  };

  return (
    <>
      <input
        onChange={ (e) => setInputSearch(e.target.value) }
        value={ inputSearch }
        type="text"
        data-cy="search-input"
      />
      <h2>Pesquisar por:</h2>
      <div onChange={ (e) => setSearchBy(e.target.value) }>
        <label htmlFor="search-by-ingredient">
          Ingrediente
          <input
            type="radio"
            id="search-by-ingredient"
            value="ingredient"
            name="search-by"
            defaultChecked
          />
        </label>
        <label htmlFor="search-by-name">
          Nome
          <input
            type="radio"
            id="search-by-name"
            value="name"
            name="search-by"
          />
        </label>
        <label htmlFor="search-by-first-letter">
          Primeira Letra
          <input
            type="radio"
            id="search-by-first-letter"
            value="first-letter"
            name="search-by"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={ handleButtonSearch }
      >
        Pesquisar
      </button>
    </>
  );
};

export default SearchBar;
