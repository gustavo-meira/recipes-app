import React from 'react';
import Header from '../components/Header';
import ProfileButtons from '../components/ProfileButtons';

const ProfilePage = () => (
  <>
    <Header searchButton={ false } />
    <ProfileButtons />
  </>
);

export default ProfilePage;
