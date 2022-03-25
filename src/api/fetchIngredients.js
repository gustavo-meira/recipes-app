const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
};

const fetchIngredients = (type) => fetch(links[type])
  .then((response) => response.json())
  .then((data) => data[type])
  .catch((e) => e);

export default fetchIngredients;
