import React, { useContext, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import logo from '../../public/styles/images/logo-white.png';
import Home from './Home';
import Login from './Login';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import EditRecipe from './EditRecipe';
import PageNotFound from './PageNotFound';
import Message from './Message';
import { UserContext } from '../context.js/UserContext';

const Navigation = () => {

    const { isAuthenticated } = useContext(UserContext);

    const authLinks = (
        <Fragment>
            <NavLink className="nav-link" to="/recipes/add">Add Recipe</NavLink>
            <NavLink className="nav-link" to="/recipes/list">Recipe List</NavLink>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </Fragment>
    )

    const PrivateRoute = ({ component, ...props }) => {
        const finalComponent = isAuthenticated ? component : Message;
        return <Route {...props} component={finalComponent} />;
    };

    return (
        <Router>
            <nav className="navbar">
                <NavLink className="navbar-brand" exact to="/">
                    <img src={require('../../public/styles/images/logo-white.png')} width="43" height="45" />
                </NavLink>
                <div className="form-inline">
                    { isAuthenticated? authLinks: guestLinks}
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/recipes/add" component={AddRecipe}/>
                <PrivateRoute exact path="/recipes/list" component={RecipeList}/>
                <PrivateRoute exact path="/recipes/view/:id" component={RecipeDetails}/>
                <PrivateRoute exact path="/recipes/update/:id" component={EditRecipe}/>
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )

}

export default Navigation;

