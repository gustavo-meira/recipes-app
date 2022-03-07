import React from 'react';
import SignIn from '../components/SignIn';

const LoginPage = () => {
  window.document.title = 'Recipes App - Tela de login';

  return (
    <SignIn />
  );
};

export default LoginPage;
