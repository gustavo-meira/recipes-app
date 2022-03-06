const getIngredientsFromRecipe = (recipe) => {
  const ingredients = [];
  const MAX_NUMBER_INGREDIENTS = 20;
  for (let i = 1; i <= MAX_NUMBER_INGREDIENTS; i += 1) {
    const currIngredient = `strIngredient${i}`;
    const currMeasure = `strMeasure${i}`;
    if (recipe?.[currIngredient]) {
      let ingredientAndMeasure = (
        `${recipe?.[currIngredient]}`
      );
      if (recipe?.[currMeasure]) {
        ingredientAndMeasure += ` - ${recipe?.[currMeasure]}`;
      }
      ingredients.push(ingredientAndMeasure);
    }
  }

  return ingredients;
};

export default getIngredientsFromRecipe;
