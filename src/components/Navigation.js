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
import RecipeItem from './RecipeItem';
import PageNotFound from './PageNotFound';

const Navigation = () => {

    return (
        <Router>
            <nav className="navbar">
                <NavLink className="navbar-brand" exact to="/">
                    <img src={logo} width="43" height="45" />
                </NavLink>
                <div className="form-inline">
                    <NavLink className="nav-link" to="/addrecipe">Add Recipe</NavLink>
                    <NavLink className="nav-link" to="/recipe">Recipe List</NavLink>
                </div>
            </nav>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/addrecipe" component={AddRecipe}></Route>
                <Route exact path="/recipe"><RecipeList/></Route>
                <Route exact path="/recipe/:id" component={RecipeItem}/>
                <Route  component={PageNotFound} />
            </Switch>
        </Router>
    )

}

export default Navigation;

