import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NationalitiesContext from './NationalitiesContext';
import fetchNationalities from '../api/fetchNationalities';

const NationalitiesProvider = ({ children }) => {
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    fetchNationalities()
      .then((fetchedNationalities) => setNationalities(fetchedNationalities));
  }, []);

  const currNationalities = nationalities.map((nationality) => nationality.strArea);

  return (
    <NationalitiesContext.Provider value={ currNationalities }>
      { children }
    </NationalitiesContext.Provider>
  );
};

NationalitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NationalitiesProvider;
