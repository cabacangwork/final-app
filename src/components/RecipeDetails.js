import React, { Component } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { Link } from 'react-router-dom'

class RecipeDetails extends Component {

    static contextType = RecipeContext;
    
    onDelete = (e) => {
        e.preventDefault();
        const { dispatch } = this.context;
        const id = this.props.match.params.id;
        const { history } = this.props;
        let decision = confirm('Confirm Delete?');
        if (decision) {
            dispatch({
                type: 'REMOVE_RECIPE',
                payload: id
            });
        }
        history.push('/recipes');
    }

    render() {

        const { list } = this.context;
        const route_id = +this.props.match.params.id;
        const findRecipe = list.recipe.find(find => find.id === route_id);

        return (
            <div className="recipe container">
                <div key={findRecipe.id} className="details">
                    <h2>{findRecipe.title}</h2>
                    <p>{findRecipe.description}</p>
                    <h5>Dish Type:</h5>
                    <p className="dish-type">{findRecipe.dish}</p>
                    <div className="ingredients-info">
                        <h5>Ingredients:</h5>
                        <ul>
                            { findRecipe.ingredients.map((ing, index) => (
                                <li key={index}>{ing}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="procedures-info">
                        <h5>Procedures:</h5>
                        <ol>
                            { findRecipe.procedures.map((pro, index) => (
                                <li key={index}>{pro}</li>
                            ))}
                        </ol>
                    </div>
                    <hr/>
                    <div className="dates">
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Recipe Added on: {findRecipe.date}</cite>
                        </footer>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Last Update on: {findRecipe.lastUpdate}</cite>
                        </footer>
                    </div>
                    <div className="footer-buttons">
                        <div className="left"><Link to="/recipes">&lt; Recipe List</Link></div>
                        <div className="middle">
                            <Link className="btn btn-info edit" to={`/recipe/update/${findRecipe.id}`}>Edit</Link>
                            <button type="button" className="btn btn-info" onClick={this.onDelete}>Delete</button>
                        </div>
                        <div className="right"><Link to="/addrecipe">Add Recipe &gt;	</Link></div>                
                    </div>
                </div>
            </div>
        )
    }

}

export default RecipeDetails;