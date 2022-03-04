const links = {
  meals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  mealsCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  drinksCategory: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
};

const fetchRecipes = async (type, category) => {
  if (category) {
    const categoryLink = links[`${type}Category`] + category;
    console.log(categoryLink);
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
