import React, { Component } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { Link } from 'react-router-dom'

class RecipeDetails extends Component {

    static contextType = RecipeContext;
    
    componentDidUpdate() {
        const { history } = this.props;
        history.push('/recipes');
    }

    onDelete = (e) => {
        e.preventDefault();
        const { dispatch } = this.context;
        const id = this.props.match.params.id;
        let decision = confirm('Confirm Delete?');
        if (decision) {
            dispatch({
                type: 'REMOVE_RECIPE',
                payload: id
            });
        }
    }

    render() {

        const { list } = this.context;
        const route_id = this.props.match.params.id;

        return (
            <div className="recipe container">
                { list.recipe.map((recipe) => (
                    recipe.id == route_id ?
                        <div key={recipe.id} className="details">
                            <h2>{recipe.title}</h2>
                            <p>{recipe.description}</p>
                            <h5>Dish Type:</h5>
                            <p className="dish-type">{recipe.dish}</p>
                            <div className="ingredients-info">
                                <h5>Ingredients:</h5>
                                <ul>
                                    { recipe.ingredients.map((ing, index) => (
                                        <li key={index}>{ing}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="procedures-info">
                                <h5>Procedures:</h5>
                                <ol>
                                    { recipe.procedures.map((pro, index) => (
                                        <li key={index}>{pro}</li>
                                    ))}
                                </ol>
                            </div>
                            <hr/>
                            <div className="dates">
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">Recipe Added on: {recipe.date}</cite>
                                </footer>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">Last Update on: {recipe.lastUpdate}</cite>
                                </footer>
                            </div>
                            <div className="footer-buttons">
                                <div className="left"><Link to="/recipes">&lt; Recipe List</Link></div>
                                <div className="middle">
                                    <Link className="btn btn-info edit" to={`/recipe/update/${recipe.id}`}>Edit</Link>
                                    <button type="button" className="btn btn-info" onClick={this.onDelete}>Delete</button>
                                </div>
                                <div className="right"><Link to="/addrecipe">Add Recipe &gt;	</Link></div>                
                            </div>
                        </div>:
                        null
                    ))}
            </div>
        )
    }

}

export default RecipeDetails;