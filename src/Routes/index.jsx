import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" element={ <LoginPage /> } />

    <Route exact path="/foods" element={ <MainRecipesPage /> } />
    <Route exact path="/drinks" element={ <MainRecipesPage /> } />

    <Route exact path="/foods/:id" element={ <DetailsRecipePage /> } />
    <Route exact path="/drinks/:id" element={ <DetailsRecipePage /> } />

    <Route exact path="/foods/:id/in-progress" element={ <InProgressRecipePage /> } />
    <Route exact path="/drinks/:id/in-progress" element={ <InProgressRecipePage /> } />

    <Route exact path="/done-recipes" element={ <DoneRecipesPage /> } />

    <Route exact path="/favorite-recipes" element={ <FavoriteRecipesPage /> } />

    <Route exact path="/explore" element={ <ExplorePage /> } />

    <Route exact path="/explore/foods" element={ <ExploreRecipesPage /> } />
    <Route exact path="/explore/drinks" element={ <ExploreRecipesPage /> } />

    <Route
      exact
      path="/explore/foods/ingredients"
      element={ <ExploreRecipesByIngredient /> }
    />
    <Route
      exact
      path="/explore/drinks/ingredients"
      element={ <ExploreRecipesByIngredient /> }
    />

    <Route
      exact
      path="/explore/foods/nationalities"
      element={ <ExploreFoodsByNationalities /> }
    />

    <Route exact path="/profile" element={ <ProfilePage /> } />

    <Route path="*" element={ <NotFoundPage /> } />
  </Switch>
);

export default Routes;
