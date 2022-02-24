const EMAIL_INPUT_TEST_ID = '[data-cy="email-input"]';
const PASSWORD_INPUT_TEST_ID = '[data-cy="password-input"]';
const LOGIN_BUTTON_TEST_ID = '[data-cy="login-submit-button"]';

describe('Testa os componentes da pagina de login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Se possuem os testid corretos', () => {
    cy.get(EMAIL_INPUT_TEST_ID);
    cy.get(PASSWORD_INPUT_TEST_ID);
    cy.get(LOGIN_BUTTON_TEST_ID);
  });
});