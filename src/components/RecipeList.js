import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class RecipeList extends Component {

    state = {
        filter: 'all',
        list: [''],
        load: true
    }

    abortController = new AbortController;

    componentDidMount() {
        fetch("http://localhost:3000/recipes/recipe-list", { signal: this.abortController.signal })
        .then(res => res.json())
        .then(list => this.setState({ list, load: false }))
        .catch(err => console.log('Failed to fetch!'));
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {

        const { filter, list, load } = this.state

        return (
            <div className="container recipe-list">
                <div className="header-part">
                    <h2>Recipe Lists</h2>
                    <div className="select-container">
                        <select className="form-control" id="filter" value={filter} onChange={(e) => this.onFilter(e.target.value)}>
                            <option value="all">Show all</option>
                            <option value="chicken">Chicken</option>
                            <option value="beef">Beef</option>
                            <option value="pork">Pork</option>
                            <option value="seafood">Seafood</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="pasta">Pasta</option>
                            <option value="desert">Desert</option>
                        </select>
                    </div>
                </div>
                <ul className="list-group">
                    {load ? <span className="loading">Loading...</span> : 
                        ( 
                            list.length < 1 ?
                                <h3 className="no-data">-- No Data in List --</h3>
                                :
                                list.map((recipe) => 
                                    <li className="list-group-item list-group-item-secondary title-link" key={recipe._id}>
                                        <Link to={`/recipes/view/${recipe._id}`}>{recipe.title}</Link>
                                    </li>
                                )
                        )
                    }
                </ul>
            </div>
        )
    }
    
    onFilter = (e) => {
        this.setState({ filter: e });
        this.setState({ load: true });
        fetch("http://localhost:3000/recipes/list/?filter=" + e, { signal: this.abortController.signal })
            .then(res => res.json())
            .then(list => {
                this.setState({ list, load: false });
            })
            .catch(err => console.log('Failed to filter!'));
    }
}


export default RecipeList;