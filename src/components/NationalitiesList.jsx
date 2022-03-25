import React, { useContext } from 'react';
import NationalitiesContext from '../contexts/NationalitiesContext';
import NationalitiesItem from './NationalitiesItem';

const NationalitiesList = () => {
  const nationalities = useContext(NationalitiesContext);

  return (
    <ul>
      {
        nationalities.map((nationality, index) => (
          <NationalitiesItem key={ index } nationality={ nationality } />
        ))
      }
    </ul>
  );
};

export default NationalitiesList;
