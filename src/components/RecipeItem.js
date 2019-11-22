import React, { Component } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import RecipeDetails from './RecipeDetails';

class RecipeItem extends Component {

    static contextType = RecipeContext;

    componentDidUpdate() {
        const { history } = this.props;
        history.push('/recipe');
    }
    
    render() {
        const { list } = this.context;
        const { match } = this.props;
        const route_id = match.params.id;
        
        return (
            <div>
                { list.recipe.map((recipe) => (
                    recipe.id == route_id ?
                        <RecipeDetails key={recipe.id} recipe={recipe} routeId={route_id}/> :
                        null
                ))}
            </div>
        );

    }

}

export default RecipeItem;