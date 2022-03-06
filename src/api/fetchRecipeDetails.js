const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
};

const fetchRecipeDetails = (type, id) => fetch(links[type] + id)
  .then((response) => response.json())
  .then((data) => data[type])
  .catch((e) => e);

export default fetchRecipeDetails;
