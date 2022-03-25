const link = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const fetchNationalities = async () => fetch(link)
  .then((response) => response.json())
  .then((data) => data.meals)
  .catch((e) => e);

export default fetchNationalities;
