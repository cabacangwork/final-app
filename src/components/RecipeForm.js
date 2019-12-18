import React from 'react';

const RecipeForm = (props) => {
    const { events, formState } = props;
    return (
        <div className="form-add card container">
            <h2 className="card-title">Add Recipe</h2>
            <form onSubmit={events.handleSubmit}>
                <div className="form-group">
                    <label>Title</label><br/>
                    <input className="form-control" type="text" name="title" value={formState.title} onChange={events.handleChange} required />
                </div>
                <div className="form-group">
                    <label>Description</label><br/>
                    <textarea className="form-control" rows="3" type="text" name="description" value={formState.description} onChange={events.handleChange} required />
                </div>
                <div className="form-group">
                    <label>Dish Type</label>
                    <select className="form-control" id="dishType" value={formState.dish} onChange={(e) => events.onOption(e)}>
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
                    {formState.ingredients.map((ingredient, index) => 
                        <div key={index} className="add-tab">
                            <div className="add-input">
                                <input className="form-control" value={ingredient} onChange={(e) => events.onChangeIngredient(e, index)} required/>
                            </div>
                            <div>
                                <button className="btn btn-remove" onClick={(e) => events.removeIngredient(e, index)}>Remove</button>
                            </div>
                        </div>
                    )}
                    <br/><button onClick={events.addIngredient} className="btn btn-secondary btn-add">Add Ingredient</button>
                </div>
                <div className="form-group">
                    <label>Procedure:</label>
                    {formState.procedures.map((procedure, index) => 
                        <div key={index} className="add-tab">
                            <div className="add-input">
                                <textarea className="form-control" rows="2" type="text" value={procedure} onChange={(e) => events.onChangeProcedure(e, index)} required/>
                            </div>
                            <div>
                                <button className="btn btn-remove" onClick={(e) => events.removeProcedure(e, index)}>Remove</button>
                            </div>
                        </div>
                    )}
                    <br/><button onClick={events.addProcedure} className="btn btn-secondary btn-add">Add Procedure</button>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
        </div>
    );

}

export default RecipeForm;