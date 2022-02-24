import React, { useState } from 'react';

const SignIn = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const testInputs = () => {
    const MIN_LENGTH_PASSWORD = 6;

    return !(
      userEmail.includes('@') && userEmail.includes('.com')
      && userPassword.length >= MIN_LENGTH_PASSWORD
    );
  };

  return (
    <div>
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
        type="button"
        disabled={ testInputs() }
      >
        Logar
      </button>
    </div>
  );
};

export default SignIn;
