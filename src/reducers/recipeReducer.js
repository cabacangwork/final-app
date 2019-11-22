export const recipeReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_RECIPE':
            return {
                ...state,
                recipe: [...state.recipe, action.payload]
            }
        case 'REMOVE_RECIPE':
            return {
                ...state,
                recipe: state.recipe.filter(recipe => recipe.id != action.payload)
            }
        case 'FILTER':
            const newList = action.payload !== 'all' ? state.recipe.filter(filter => filter.dish === action.payload) : [];
            return {
                ...state,
                filteredRecipes: newList,
            };
        case 'EDIT_DETAILS':
            const newState = {
                ...state,
                recipe: state.recipe.map(recipe =>
                    recipe.id == action.payload.id ? { 
                        ...recipe, 
                        title: action.payload.newTitle,
                        description: action.payload.newDescription,
                        dish: action.payload.newDish,
                        ingredients: action.payload.newIngredients,
                        procedures: action.payload.newProcedures,
                        lastUpdate: action.payload.editDate
                    } 
                    : recipe
                )
            };
            return newState
        default:
            return state;
    }
}