import React, {Component} from 'react';
import RecipeContextProvider from './contexts/RecipeContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import PageNotFound from './components/PageNotFound';
import EditRecipe from './components/EditRecipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component{
  render() { 
    return (
        <RecipeContextProvider>
            <Router>
              <Navigation/>
              <Switch>
                  <Route exact path="/"><Home/></Route>
                  <Route exact path="/addrecipe" component={AddRecipe}></Route>
                  <Route exact path="/recipes" component={RecipeList}></Route>
                  <Route exact path="/recipe/:id" component={RecipeDetails}/>
                  <Route exact path="/recipe/update/:id" component={EditRecipe}/>
                  <Route  component={PageNotFound} />
              </Switch>
            </Router>
        </RecipeContextProvider>
    )
  }

}

export default App;