import React, { useContext, useState } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { Link } from 'react-router-dom'

function RecipeList() {

    const { list, dispatch } = useContext(RecipeContext);
    const [filter, setFilter] = useState('all');

    return (
        <div className="container recipe-list">
            <div className="header-part">
                <h2>Recipe Lists</h2>
                <div className="select-container">
                    <select className="form-control" id="filter" value={filter} onChange={(e) => onFilter(e.target.value)}>
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
            
            {renderList()}

        </div>
    )

    function onFilter(filterVal) {
        setFilter(filterVal);
        dispatch({
            type: 'FILTER',
            payload: filterVal
        });
    }

    function renderList() {
        if (list.recipe.length < 1) 
            return (
                <div className="empty-list">
                    <h2>-- No Recipe in the List --</h2>
                </div>
            );
        if(filter === 'all') 
            return (
                <ul className="list-group">
                    {list.recipe.map((recipe) => (
                        <li className="list-group-item list-group-item-secondary" key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>
            );
        if (list.filteredRecipes < 1 ) 
            return (
                <div className="empty-list">
                    <h2>-- No Recipe Found --</h2>
                </div>
            );
        return (
            <ul className="list-group">
                {list.filteredRecipes.map((filter) => (
                    <li className="list-group-item list-group-item-secondary" key={filter.id}>
                        <Link to={`/recipe/${filter.id}`}>{filter.title}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}



export default RecipeList;