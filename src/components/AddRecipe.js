import React, { Component } from 'react';
import moment from 'moment';

class AddRecipe extends Component{

    state = {
        title: '',
        description: '',
        ingredients: [''],
        procedures: [''],
        dish: 'not-specified',
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({loading: true})
        const recipe = {
            title: this.state.title,
            description: this.state.description,
            ingredients: this.state.ingredients,
            procedures: this.state.procedures,
            dish: this.state.dish,
            dateCreated: moment().format('LLL'),
            editDate: moment().format('LLL')
        }
        const response = await fetch('http://localhost:5000/recipes/add', {
            method: 'post',
            body:JSON.stringify(recipe), 
            headers: {'Content-Type': 'application/json'}}
        );
        const json = await response.json();
        const clearInput = await (  
            this.setState({title:'', description:'', ingredients:[''], procedures:[''], dish:'all'})
        );
        console.log(json.msg);
        this.props.history.push('/recipes/list');
    }

    render() { 

        const { title, description, dish, ingredients, procedures, loading } = this.state

        return (
            <div>
                { loading ? <span className="loading">Saving New Recipe...</span> :
                    <div className="form-add card container">
                        <h2 className="card-title">Add Recipe</h2>
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
                                {ingredients.map((ingredient, index) => 
                                    <div key={index} className="add-tab">
                                        <div className="add-input">
                                            <input className="form-control" value={ingredient} onChange={(e) => this.onChangeIngredient(e, index)} required/>
                                        </div>
                                        <div>
                                            <button className="btn btn-remove" onClick={(e) => this.removeIngredient(e, index)}>Remove</button>
                                        </div>
                                    </div>
                                )}
                                <br/><button onClick={this.addIngredient} className="btn btn-secondary btn-add">Add Ingredient</button>
                            </div>
                            <div className="form-group">
                                <label>Procedure:</label>
                                {procedures.map((procedure, index) => 
                                    <div key={index} className="add-tab">
                                        <div className="add-input">
                                            <textarea className="form-control" rows="2" type="text" value={procedure} onChange={(e) => this.onChangeProcedure(e, index)} required/>
                                        </div>
                                        <div>
                                            <button className="btn btn-remove" onClick={(e) => this.removeProcedure(e, index)}>Remove</button>
                                        </div>
                                    </div>
                                )}
                                <br/><button onClick={this.addProcedure} className="btn btn-secondary btn-add">Add Procedure</button>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </form>
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

    onChangeIngredient(e, index) {
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
}

export default AddRecipe;