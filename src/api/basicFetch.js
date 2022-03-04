const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
};

const basicFetchList = async (type) => fetch(links[type])
  .then((response) => response.json())
  .then((data) => data[type])
  .catch((e) => e);

export default basicFetchList;
