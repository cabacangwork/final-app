import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import PageNotFound from './components/PageNotFound';
import EditRecipe from './components/EditRecipe';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GifGenerator from './components/GifGenerator';
import TaskApp from './test-components/TaskApp';

class App extends Component{
  render() { 
    return (
          <div>
            <Router>
              <Navigation/>
              <Switch>
                  <Route exact path="/"><Home/></Route>
                  <Route exact path="/recipes/add" component={AddRecipe}/>
                  <Route exact path="/recipes/list" component={RecipeList}/>
                  <Route exact path="/recipes/view/:id" component={RecipeDetails}/>
                  <Route exact path="/recipes/update/:id" component={EditRecipe}/>
                  <Route exact path="/tester" component={TaskApp}/>
                  <Route exact path="/generator" component={GifGenerator}/>
                  <Route component={PageNotFound} />
              </Switch>
            </Router>
            <Footer/>
          </div>
    )
  }

}

export default App;