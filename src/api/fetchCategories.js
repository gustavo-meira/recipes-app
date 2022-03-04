const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
};

const fetchCategories = async (type) => fetch(links[type])
  .then((response) => response.json())
  .then((data) => data[type])
  .catch((e) => e);

export default fetchCategories;
