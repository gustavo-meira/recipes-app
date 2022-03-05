const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  mealscategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  drinkscategory: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
  mealsname: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  drinksname: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  'mealsfirst-letter': 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  'drinksfirst-letter': 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  mealsingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  drinksingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
};

const fetchRecipes = async (type, searchBy) => {
  if (searchBy) {
    const { currentTerm, currentSearch } = searchBy;
    const categoryLink = links[`${type}${currentTerm.replace('?', '')}`] + currentSearch;
    return fetch(categoryLink)
      .then((response) => response.json())
      .then((data) => data[type])
      .catch((e) => e);
  }

  return fetch(links[type])
    .then((response) => response.json())
    .then((data) => data[type])
    .catch((e) => e);
};

export default fetchRecipes;
