import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import DetailsRecipePage from '../pages/DetailsRecipePage';
import DoneRecipesPage from '../pages/DoneRecipesPage';
import ExploreFoodsByNationalitiesPage from '../pages/ExploreFoodsByNationalitiesPage';
import ExplorePage from '../pages/ExplorePage';
import ExploreRecipesByIngredientPage from '../pages/ExploreRecipesByIngredientPage';
import ExploreRecipesPage from '../pages/ExploreRecipesPage';
import FavoriteRecipesPage from '../pages/FavoriteRecipesPage';
import InProgressRecipePage from '../pages/InProgressRecipePage';
import LoginPage from '../pages/LoginPage';
import MainRecipesPage from '../pages/MainRecipesPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProfilePage from '../pages/ProfilePage';

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
      element={ <ExploreRecipesByIngredientPage /> }
    />
    <Route
      exact
      path="/explore/drinks/ingredients"
      element={ <ExploreRecipesByIngredientPage /> }
    />

    <Route
      exact
      path="/explore/foods/nationalities"
      element={ <ExploreFoodsByNationalitiesPage /> }
    />

    <Route exact path="/profile" element={ <ProfilePage /> } />

    <Route path="*" element={ <NotFoundPage /> } />
  </Switch>
);

export default Routes;
