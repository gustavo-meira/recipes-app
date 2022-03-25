const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/random.php',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
};

const fetchRandomRecipe = (type) => fetch(links[type])
  .then((response) => response.json())
  .then((data) => data[type][0])
  .catch((e) => e);

export default fetchRandomRecipe;
