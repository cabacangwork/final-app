import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PageNotFound from './PageNotFound';

class RecipeDetails extends Component {

    state = {
        recipeInfo: '',
        loading: true,
        notFound: false
    }

    abortController = new AbortController;

    componentDidMount() {
        fetch('http://localhost:5000/recipes/view/'+this.props.match.params.id, { signal: this.abortController.signal })
        .then(res => res.json())
        .then(recipeInfo => {
            if(recipeInfo.error === true) {
                this.setState({notFound: true, loading: false})
                console.log(recipeInfo.msg)
            }
            else {
                this.setState({recipeInfo, loading: false})
            }
        })
        .catch(err => {
            this.setState({notFound: true, loading: false})
            console.log('Recipe Not Found')
        });
    }

    // Abort Fetch Request in leaving page
    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        const { loading, recipeInfo, notFound } = this.state
        return (
            <div> 
                <div className="recipe container">
                    {loading? <span className="loading">Loading...</span> : 
                        (notFound? <PageNotFound/>:
                            <div key={recipeInfo._id} className="details">
                                <h2>{recipeInfo.title}</h2>
                                <p>{recipeInfo.description}</p>
                                <h5>Dish Type:</h5>
                                <p className="dish-type">{recipeInfo.dish}</p>
                                <div className="ingredients-info">
                                    <h5>Ingredients:</h5>
                                    <ul>
                                        { recipeInfo.ingredients.map((ing, index) => (
                                            <li key={index}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="procedures-info">
                                    <h5>Procedures:</h5>
                                    <ol>
                                        { recipeInfo.procedures.map((pro, index) => (
                                            <li key={index}>{pro}</li>
                                        ))}
                                    </ol>
                                </div>
                                <hr/>
                                <div className="dates">
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Recipe Added on: {recipeInfo.dateCreated}</cite>
                                    </footer>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Last Update on: {recipeInfo.editDate}</cite>
                                    </footer>
                                </div>
                                <div className="footer-buttons">
                                    <div className="left"><Link to="/recipes/list">&lt; Recipe List</Link></div>
                                    <div className="middle">
                                        <Link className="btn btn-info edit" to={`/recipes/update/${recipeInfo._id}`}>Edit</Link>
                                        <button type="button" className="btn btn-info" onClick={() => this.onDelete(recipeInfo._id)}>Delete</button>
                                    </div>
                                    <div className="right"><Link to="/recipes/add">Add Recipe &gt;	</Link></div>                
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    onDelete = async (id) => {
        this.setState({loading: true})
        try {
            const response = await fetch('http://localhost:5000/recipes/'+id, {
                method: 'delete'
            });
            const json = await response.json();
            console.log(json.msg)
            this.props.history.push('/recipes/list');
        }catch {
            this.setState({loading: false})
            alert('Delete Unsuccessful!')
        } 
    }

}

export default RecipeDetails;