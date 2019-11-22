import React, {Component} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import moment from 'moment';
import { Link } from "react-router-dom";

class EditRecipe extends Component{

    static contextType = RecipeContext;

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            ingredients: [''],
            procedures: [''],
            dish: 'not-specified',
            loader: true
        }
    }

    componentDidMount() {
        const { list } = this.context;
        const { match } = this.props;
        const route_id = match.params.id;
        setTimeout(() => {
            { list.recipe.map((recipe) => (
                recipe.id == route_id ?
                this.setState({
                    title:  recipe.title,
                    description: recipe.description,
                    dish: recipe.dish,
                    ingredients: recipe.ingredients,
                    procedures: recipe.procedures,
                    loader: false
                }):null
            ))}
        }, 1000);
    }

    render() { 
        const { list } = this.context;
        const { match } = this.props;
        const route_id = match.params.id;
        const { title, description, dish, ingredients, procedures, loader } = this.state

        return (
            <div className="form-add card container edit">
                {loader? 
                    <h2 className="loader">Loading Current Recipe ...</h2>
                    :
                    <div>
                        <Link to={`/recipe/${route_id}`} className="back-link">&lt; Back to Recipe Details</Link>
                        <h2 className="card-title">Edit Recipe</h2>
                        { list.recipe.map((recipe) => (
                            recipe.id == route_id ?
                                <div key={recipe.id} className="edit-form">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Title</label><br/>
                                            <input className="form-control" type="text" name="title" value={title} onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label><br/>
                                            <textarea className="form-control" rows="3" type="text" name="description" value={description} onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Dish Type</label>
                                            <select className="form-control" id="dishType" value={dish} onChange={(e) => this.onOption(e)}>
                                                <option value="not-specified">Not Specified</option>
                                                <option value="chicken">Chicken</option>
                                                <option value="beef">Beef</option>
                                                <option value="pork">Pork</option>
                                                <option value="seafood">Seafood</option>
                                                <option value="vegetable">Vegetable</option>
                                                <option value="pasta">Pasta</option>
                                                <option value="desert">Desert</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Ingredients:</label>
                                            { ingredients && ingredients.map((ing, index) => (
                                                <div key={index} className="add-tab">
                                                    <div className="add-input">
                                                        <input className="form-control" value={ing} onChange={(e) => this.onChangeIngredient(e, index)} required/>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-remove" onClick={(e) => this.removeIngredient(e, index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                            <br/><button onClick={this.addIngredient} className="btn btn-secondary btn-add">Add Ingredient</button>
                                        </div>
                                        <div className="form-group">
                                            <label>Procedure:</label>
                                            { procedures && procedures.map((procedure, index) => (
                                                <div key={index} className="add-tab">
                                                    <div className="add-input">
                                                        <textarea className="form-control" rows="3" type="text" value={procedure} onChange={(e) => this.onChangeProcedure(e, index)} required/>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-remove" onClick={(e) => this.removeProcedure(e, index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                            <br/><button onClick={this.addProcedure} className="btn btn-secondary btn-add">Add Procedure</button>
                                        </div>   
                                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>   
                                    </form>
                                </div>:
                                null
                        ))}
                    </div>
                }
            </div>
        )

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onOption = (e) => {
        this.setState({dish:e.target.value})
    }

    //Ingredients Input
    onChangeIngredient = (e, index) => {
        const temp = [...this.state.ingredients];
        temp[index] = e.target.value;
        this.setState({ingredients:temp})
    }
    addIngredient = (e) => {
        e.preventDefault();
        const values = [...this.state.ingredients];
        values.push('');
        this.setState({ingredients:values})
    }
    removeIngredient = (e, index) => {
        e.preventDefault();
        const values = [...this.state.ingredients];
        if(index >= 1) {
            values.splice(index, 1);
            this.setState({ingredients:values})
        }
    }
    // End Ingredients Input

    //Procedures Input
    onChangeProcedure(e, index) {
        const temp = [...this.state.procedures];
        temp[index] = e.target.value;
        this.setState({procedures:temp})
    }
    addProcedure = (e) => {
        e.preventDefault();
        const values = [...this.state.procedures];
        values.push('');
        this.setState({procedures:values})
    }
    removeProcedure = (e, index) => {
        e.preventDefault();
        const values = [...this.state.procedures];
        if(index >= 1) {
            values.splice(index, 1);
            this.setState({procedures:values})
        }
    }
    // End Procedures Input

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.context;

        const recipeUpdate = {
            id: this.props.match.params.id,
            newTitle: this.state.title,
            newDescription: this.state.description,
            newDish: this.state.dish,
            newIngredients: this.state.ingredients,
            newProcedures: this.state.procedures,
            editDate: moment().format('LLL')
        }
        dispatch({
            type: 'EDIT_DETAILS',
            payload: recipeUpdate
        });
        alert('Success Editing Recipe');
        setTimeout(() => {
            this.props.history.push(`/recipe/${this.props.match.params.id}`);
        }, 500)
    }
}

export default EditRecipe;