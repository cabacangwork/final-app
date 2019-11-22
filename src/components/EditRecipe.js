import React, {Component} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import moment from 'moment';

class EditRecipe extends Component{

    static contextType = RecipeContext;

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            ingredients: [''],
            procedures: [''],
            dish: 'not-specified'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeIngredient(e, index) {
        const temp = [...this.state.ingredients];
        temp[index] = e.target.value;
        this.setState({ingredients:temp})
    }

    removeIngredient = (e, index) => {
        e.preventDefault();
        const values = [...this.state.ingredients];
        if(index >= 1) {
            values.splice(index, 1);
            this.setState({ingredients:values})
        }
    }

    addIngredient = (e) => {
        e.preventDefault();
        const values = [...this.state.ingredients];
        values.push('');
        this.setState({ingredients:values})
    }

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
    
    onOption = (e) => {
        this.setState({dish:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.context;

        const recipe = {
            newId: this.props.recipe.id,
            newTitle: this.state.title,
            newDescription: this.state.description,
            newIngredients: this.state.ingredients,
            newDish: this.state.dish,
            editDate: moment().format('LLL')
        }
        dispatch({
            type: 'EDIT_DETAILS',
            payload: recipe
        });
        alert('Success Editing Recipe');
    }


    render() { 

        const { title, description, procedures, ingredients, dish } = this.props.recipe

        return (
            <div className="form-add card container edit">
                <h2 className="card-title">Edit Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label><span className="label-title">Current Title:</span> <span className="label-caption">{title}</span></label>
                        <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                    <label><span className="label-title">Current Description:</span> <br/><span className="label-caption">{description}</span></label>
                        <textarea className="form-control" rows="3" type="text" name="description" value={this.state.description} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><span className="label-title">Current Dish Type:</span> <span className="label-caption">{dish}</span></label>
                        <select className="form-control" id="dishType" value={this.state.dish} onChange={(e) => this.onOption(e)}>
                            <option value="not-specified">Not Specified</option>
                            <option value="chicken">Chicken</option>
                            <option value="beef">Beef</option>
                            <option value="pork">Pork</option>
                            <option value="seafood">Seafood</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="pasta">Side Dish</option>
                            <option value="desert">Desert</option>
                        </select>
                    </div>
                    <div className="form-group multiple">
                        <label><span className="label-title">Current Ingredients:</span>
                            <ul>
                                { ingredients.map((ing, index) => (
                                    <li key={index} className="label-caption">{ing}</li>
                                ))}
                            </ul>
                        </label>
                        {this.state.ingredients.map((ingredient, index) => {
                            return (
                                <div key={index} className="add-tab">
                                    <div className="add-input">
                                        <input className="form-control" value={ingredient} onChange={(e) => this.onChangeIngredient(e, index)} required/>
                                    </div>
                                    <div>
                                        <button className="btn btn-remove" onClick={(e) => this.removeIngredient(e, index)}>Remove</button>
                                    </div>
                                </div>
                            );
                        })}
                        <br/><button onClick={this.addIngredient} className="btn btn-secondary btn-add">Add Ingredient</button>
                    </div>
                    <div className="form-group multiple">
                        <label><span className="label-title">Current Procedures:</span>
                            <ul>
                                { procedures.map((pro, index) => (
                                    <li key={index} className="label-caption">{pro}</li>
                                ))}
                            </ul>
                        </label>
                        {this.state.procedures.map((procedure, index) => (
                            <div key={index} className="add-tab">
                                <div className="add-input">
                                    <textarea className="form-control" rows="2" type="text" value={procedure} onChange={(e) => this.onChangeProcedure(e, index)} required/>
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
            </div>
        )

    }

}

export default EditRecipe;