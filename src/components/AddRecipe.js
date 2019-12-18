import React, { Component } from 'react';
import moment from 'moment';
import RecipeForm from './RecipeForm';

class AddRecipe extends Component{

    state = {
        title: '',
        description: '',
        ingredients: [''],
        procedures: [''],
        dish: 'not-specified',
        loading: false,
        popNotify: false,
        success: false,
        msg: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        const recipe = {
            title: this.state.title,
            description: this.state.description,
            ingredients: this.state.ingredients,
            procedures: this.state.procedures,
            dish: this.state.dish,
            dateCreated: moment().format('LLL'),
            editDate: moment().format('LLL'),
            recipeId: Date.now()
        }
        fetch('http://localhost:3000/recipes/add', {
            method: 'post',
            body:JSON.stringify(recipe), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            this.clearInput(data);
        })
        .catch(() => this.setState({ loading: false, popNotify: true, msg: 'Saving Failed!'})
        )        
    }

    render() { 
        
        const { title, description, dish, ingredients, procedures, loading, popNotify, success, msg } = this.state
        const formState = { title, description, dish, ingredients, procedures, loading, popNotify, success, msg };

        const { handleSubmit, handleChange, onOption, onChangeIngredient, removeIngredient, addIngredient, onChangeProcedure, removeProcedure, addProcedure } = this;
        const events = { handleSubmit, handleChange, onOption, onChangeIngredient, removeIngredient, addIngredient, onChangeProcedure, removeProcedure, addProcedure };

        return (
            <div>
                <div className={`alert-wrapper ${popNotify? `on`: `off`} ${success? `green`: `red`} `}>
                    {msg}
                    <button onClick={this.closeButton}>x</button>
                </div>
                { loading ? <span className="loading">Loading...</span> :
                    <RecipeForm events={events} formState={formState}/>
                }
            </div>
        )

    }

    closeButton = () => {
        const currentState = this.state.popNotify
        this.setState({popNotify: !currentState})
    }

    clearInput = (data) => {
        if (data.success === true) {
            this.setState({
                title:'', 
                description:'', 
                ingredients:[''], 
                procedures:[''], 
                dish:'all', 
                loading: false, 
                success: true, 
                msg: data.msg,
                popNotify: true
            })
        }
        else {
            this.setState({
                loading: false, 
                success: false, 
                msg: data.msg,
                popNotify: true
            })
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, popNotify: false });
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