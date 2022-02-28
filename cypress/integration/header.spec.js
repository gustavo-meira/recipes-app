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

  it('Não existe header na tela de login', () => {
    cy.visit(pages.LOGIN_PAGE);

    notHasHeader();
  });

  it('Header existe e tem o botão de busca na pagina principal de comidas', () => {
    cy.visit(pages.FOODS_PAGE);

    hasHeader();
  });

  it('Header existe e tem o botão de busca na pagina principal de bebidas', () => {
    cy.visit(pages.DRINKS_PAGE);

    hasHeader();
  });

  it('Não tem header na tela de detalhes de uma receita de comida', () => {
    cy.visit(pages.FOOD_DETAILS_PAGE(123));

    notHasHeader();
  });

  it('Não tem header na tela de detalhes de uma receita de bebida', () => {
    cy.visit(pages.DRINK_DETAILS_PAGE(123));

    notHasHeader();
  });

  it('Não tem header na tela de receita em progresso de uma comida', () => {
    cy.visit(pages.FOOD_IN_PROGRESS_PAGE(123));

    notHasHeader();
  });

  it('Não tem header na tela de receita em progresso de uma bebida', () => {
    cy.visit(pages.DRINK_IN_PROGRESS_PAGE(123));

    notHasHeader();
  });

  it('Header existe mas não tem o botão de busca na pagina principal de explorar', () => {
    cy.visit(pages.EXPLORE_RECIPES_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de explorar comidas', () => {
    cy.visit(pages.EXPLORE_FOODS_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de explorar por bebidas', () => {
    cy.visit(pages.EXPLORE_DRINKS_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de explorar comidas por ingrediente', () => {
    cy.visit(pages.EXPLORE_FOODS_BY_INGREDIENT_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de explorar bebidas por ingrediente', () => {
    cy.visit(pages.EXPLORE_DRINKS_BY_INGREDIENT_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de explorar comidas por nacionalidade', () => {
    cy.visit(pages.EXPLORE_FOODS_BY_NATIONALITY_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de perfil', () => {
    cy.visit(pages.PROFILE_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de receitas feitas', () => {
    cy.visit(pages.DONE_RECIPES_PAGE);

    hasHeader(false);
  });

  it('Header existe mas não tem o botão de busca na pagina de receitas favoritas', () => {
    cy.visit(pages.FAVORITE_RECIPES_PAGE);

    hasHeader(false);
  });

});

describe('Redireciona a pessoa usuaria para a pagina de perfil caso clique na foto', () => {
  it('Redireciona a pessoa usuaria para o perfil dela pela tela de comidas', () => {
    cy.visit(pages.FOODS_PAGE);

    cy.get(PROFILE_BUTTON_TEST_ID).click();

    cy.url().should('equal', pages.PROFILE_PAGE);
  });

  it('Redireciona a pessoa usuaria para o perfil dela pela tela de bebidas', () => {
    cy.visit(pages.DRINKS_PAGE);

    cy.get(PROFILE_BUTTON_TEST_ID).click();

    cy.url().should('equal', pages.PROFILE_PAGE);
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
