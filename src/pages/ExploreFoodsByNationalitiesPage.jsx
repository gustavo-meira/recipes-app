import React from 'react';
import Header from '../components/Header';
import NationalitiesList from '../components/NationalitiesList';
import NationalitiesProvider from '../contexts/NationalitiesProvider';

const ExploreFoodsByNationalitiesPage = () => (
  <>
    <Header searchButton={ false } />
    <NationalitiesProvider>
      <NationalitiesList />
    </NationalitiesProvider>
  </>
);

export default ExploreFoodsByNationalitiesPage;
