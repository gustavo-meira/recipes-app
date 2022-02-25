import * as pages from "../utils/pages";
const PROFILE_BUTTON_TEST_ID = '[data-cy="profile-button"]';
const APP_TITLE_TEST_ID = '[data-cy="app-title"]';
const SEARCH_BUTTON_TEST_ID = '[data-cy="search-button"]';
const SEARCH_INPUT_TEST_ID = '[data-cy="search-input"]';
const APP_TITLE = 'Recipes App';


describe('Testa o componente Header', () => {
  it('Tem os testid corretos', () => {
    cy.visit(pages.FOODS_PAGE);

    cy.get(PROFILE_BUTTON_TEST_ID);
    cy.get(APP_TITLE_TEST_ID);
    cy.get(SEARCH_BUTTON_TEST_ID);
  });
});

describe('Testa se o Header existe nas paginas corretas', () => {
  const hasHeader = (searchButton = true) => {
    cy.get(PROFILE_BUTTON_TEST_ID);
    cy.get(APP_TITLE_TEST_ID).contains(APP_TITLE);
    
    if (searchButton) cy.get(SEARCH_BUTTON_TEST_ID);
    else cy.get(SEARCH_BUTTON_TEST_ID).should('not.exist');
  };

  const notHasHeader = () => {
    cy.get(PROFILE_BUTTON_TEST_ID).should('not.exist');
    cy.get(APP_TITLE_TEST_ID).should('not.exist');
    cy.get(SEARCH_BUTTON_TEST_ID).should('not.exist');
  };

  Object.entries(pages).forEach(([key, value]) => {
    if (key.includes('DETAILS') || key.includes('PROGRESS')) {
      it('Não existe header', () => {
        cy.visit(value(123));

        notHasHeader();
      });
    } else if (key.includes('EXPLORE') || key.includes('DONE_RECIPES') || key.includes('FAVORITE_RECIPES') || key.includes('PROFILE')) {
      it('Existe header mas ele não tem botão de busca', () => {
        cy.visit(value);

        hasHeader(false);
      });
    } else if (key.includes('LOGIN')) {
      it('Não existe header', () => {
        cy.visit(value);
        
        notHasHeader();
      });
    } else {
      it('Existe header e ele tem botão de busca', () => {
        cy.visit(value);
  
        hasHeader();
      });
    }
  });

});

describe('Redireciona a pessoa usuaria para a pagina de perfil caso clique na foto', () => {
  Object.entries(pages).forEach(([key, value]) => {
    if (key.includes('FOODS') || key.includes('DRINKS')
    || key.includes('FAVORITE_RECIPES') || key.includes('DONE_RECIPES')
    || key.includes('PROFILE')) {
      it('Redireciona a pessoa usuaria para a pagina correta', () => {
        cy.visit(value);

        cy.get(PROFILE_BUTTON_TEST_ID).click();

        cy.url().should('equal', pages.PROFILE_PAGE);
      });
    }
  });
});

describe('Ao clicar no botão de no botão de pesquisa, uma barra de pesquisa deve aparecer', () => {
  it('Ao clicar uma vez a barra devera ser mostrada', () => {
    cy.visit(pages.FOODS_PAGE);

    cy.get(SEARCH_INPUT_TEST_ID).should('not.exist');

    cy.get(SEARCH_BUTTON_TEST_ID).click();

    cy.get(SEARCH_INPUT_TEST_ID);
  });

  it('Ao clicar uma segunda vez a barra devera sumir', () => {
    cy.visit(pages.DRINKS_PAGE);

    cy.get(SEARCH_INPUT_TEST_ID).should('not.exist');
    
    cy.get(SEARCH_BUTTON_TEST_ID).click();

    cy.get(SEARCH_INPUT_TEST_ID);

    cy.get(SEARCH_BUTTON_TEST_ID).click();

    cy.get(SEARCH_INPUT_TEST_ID).should('not.exist');
  });
});
