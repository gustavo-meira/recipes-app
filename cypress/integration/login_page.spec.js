import { LOGIN_PAGE } from "../utils/pages";

const EMAIL_INPUT_TEST_ID = '[data-cy="email-input"]';
const PASSWORD_INPUT_TEST_ID = '[data-cy="password-input"]';
const LOGIN_BUTTON_TEST_ID = '[data-cy="login-submit-button"]';
const VALID_EMAIL = 'email@email.com';
const INVALID_EMAIL_1 = 'email@email';
const INVALID_EMAIL_2 = 'email.com';
const VALID_PASSWORD = '123456';
const INVALID_PASSWORD = '123';
const EMAIL_LOCAL_STORAGE = JSON.stringify({ email: VALID_EMAIL });

describe('Testa os componentes da pagina de login', () => {
  beforeEach(() => {
    cy.visit(LOGIN_PAGE);
  });

  it('Se possuem os testid corretos', () => {
    cy.get(EMAIL_INPUT_TEST_ID);
    cy.get(PASSWORD_INPUT_TEST_ID);
    cy.get(LOGIN_BUTTON_TEST_ID);
  });

  it('É possivel escrever nos campos de input', () => {
    cy.get(EMAIL_INPUT_TEST_ID).type(VALID_EMAIL);
    cy.get(PASSWORD_INPUT_TEST_ID).type(VALID_PASSWORD);
  });

  it('O botão inicia como desabilitado', () => {
    cy.get(LOGIN_BUTTON_TEST_ID).should('be.disabled');
  });

  it('Se for escrito um email e senha invalidos, o botão devera continuar desabilitado', () => {
    cy.get(EMAIL_INPUT_TEST_ID).type(INVALID_EMAIL_1);
    cy.get(PASSWORD_INPUT_TEST_ID).type(INVALID_PASSWORD);
    cy.get(LOGIN_BUTTON_TEST_ID).should('be.disabled');

    cy.get(EMAIL_INPUT_TEST_ID).clear();
    cy.get(EMAIL_INPUT_TEST_ID).type(INVALID_EMAIL_2);
    cy.get(LOGIN_BUTTON_TEST_ID).should('be.disabled');
  });

  it('Se os dados forem inseridos corretamente, o botão devera ficar habilitado', () => {
    cy.get(EMAIL_INPUT_TEST_ID).type(VALID_EMAIL);
    cy.get(PASSWORD_INPUT_TEST_ID).type(VALID_PASSWORD);
    cy.get(LOGIN_BUTTON_TEST_ID).should('be.enabled');
  });

  it('O botão de logar deve salvar o email do usuario no localStorage na chave user', () => {
    cy.clearLocalStorage();

    cy.get(EMAIL_INPUT_TEST_ID).type(VALID_EMAIL);
    cy.get(PASSWORD_INPUT_TEST_ID).type(VALID_PASSWORD);
    cy.get(LOGIN_BUTTON_TEST_ID).click();

    cy.getLocalStorage('user').should('equal', EMAIL_LOCAL_STORAGE);
  });

  it('O botão de logar deve levar o usuario para a pagina "/foods"', () => {
    cy.get(EMAIL_INPUT_TEST_ID).type(VALID_EMAIL);
    cy.get(PASSWORD_INPUT_TEST_ID).type(VALID_PASSWORD);
    cy.get(LOGIN_BUTTON_TEST_ID).click();

    cy.url().should('equal', 'http://localhost:3000/foods');
  });
});
