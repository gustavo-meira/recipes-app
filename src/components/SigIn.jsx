import React from 'react';

const SignIn = () => (
  <div>
    <input data-cy="email-input" placeholder="Email" />
    <input data-cy="password-input" placeholder="Senha" />
    <button
      data-cy="login-submit-button"
      type="button"
      disabled
    >
      Logar
    </button>
  </div>
);

export default SignIn;
