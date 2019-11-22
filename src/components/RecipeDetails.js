import React, { Component } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { Link } from 'react-router-dom'
import EditRecipe from './EditRecipe';

class RecipeDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false
        }
    }

    static contextType = RecipeContext;
    
    onDelete = (e) => {
        e.preventDefault();
        const { dispatch } = this.context;
        const id = this.props.recipe.id;
        let decision = confirm('Confirm Delete?');
        if (decision) {
            dispatch({
                type: 'REMOVE_RECIPE',
                payload: id
            });
        }
    }

    onEdit = () => {
        setTimeout(() => {
            this.setState({edit: true});
        }, 500)
    }

    onCancel = () => {
        setTimeout(() => {
            this.setState({edit:false})
        }, 500)
    }

    render() {
        const { recipe } = this.props;
        return (
            <div className={"recipe container" + (this.state.edit ? ' hide' : '')}>
                <div className="details">
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
                    <footer className="blockquote-footer"><cite title="Source Title">Recipe Added on: {recipe.date}</cite></footer>
                    <div className="footer-buttons">
                        <div className="left"><Link to="/recipe">&lt; Recipe List</Link></div>
                        <div className="middle">
                            <button type="button" className="btn btn-info" onClick={this.onEdit}>Edit</button>
                            <button type="button" className="btn btn-info" onClick={this.onDelete}>Delete</button>
                        </div>
                        <div className="right"><Link to="/addrecipe">Add Recipe &gt;	</Link></div>                
                    </div>
                </div>
                <div className="form-edit">
                    {this.state.edit?
                        <EditRecipe recipe={recipe}/>:
                        null
                    }
                </div>
                <div className="cancel-button">
                    {this.state.edit?
                        <button type="button" className="btn btn-danger btn-lg" onClick={this.onCancel}>Cancel</button>:
                        null
                    }
                </div>
            </div>
        )
    }

}

export default RecipeDetails;