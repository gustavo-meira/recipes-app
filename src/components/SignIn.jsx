import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigateTo = useNavigate();

  const testInputs = () => {
    const MIN_LENGTH_PASSWORD = 6;

    return !(
      userEmail.includes('@') && userEmail.includes('.com')
      && userPassword.length >= MIN_LENGTH_PASSWORD
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    navigateTo('/foods');
  };

  return (
    <forms>
      <input
        type="email"
        data-cy="email-input"
        placeholder="Email"
        value={ userEmail }
        onChange={ ({ target: { value } }) => setUserEmail(value) }
      />
      <input
        type="password"
        data-cy="password-input"
        placeholder="Senha"
        value={ userPassword }
        onChange={ ({ target: { value } }) => setUserPassword(value) }
      />
      <button
        data-cy="login-submit-button"
        type="submit"
        disabled={ testInputs() }
        onClick={ handleLogin }
      >
        Logar
      </button>
    </forms>
  );
};

export default SignIn;
