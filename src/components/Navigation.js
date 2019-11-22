import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import logo from '../../public/styles/images/logo-white.png';
import Home from './Home';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import PageNotFound from './PageNotFound';
import EditRecipe from './EditRecipe';

const Navigation = () => {

    return (
        <Router>
            <nav className="navbar">
                <NavLink className="navbar-brand" exact to="/">
                    <img src={logo} width="43" height="45" />
                </NavLink>
                <div className="form-inline">
                    <NavLink className="nav-link" to="/addrecipe">Add Recipe</NavLink>
                    <NavLink className="nav-link" to="/recipes">Recipe List</NavLink>
                </div>
            </nav>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/addrecipe" component={AddRecipe}></Route>
                <Route exact path="/recipes" component={RecipeList}></Route>
                <Route exact path="/recipe/:id" component={RecipeDetails}/>
                <Route exact path="/recipe/update/:id" component={EditRecipe}/>
                <Route  component={PageNotFound} />
            </Switch>
        </Router>
    )

}

export default Navigation;

