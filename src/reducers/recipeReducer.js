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
                recipe: state.recipe.filter(utang => utang.id !== action.payload)
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
                    recipe.id === action.payload.newId ? { 
                        ...recipe, 
                        title: action.payload.newTitle,
                        description: action.payload.newDescription,
                        ingredients: action.payload.newIngredients,
                        dish: action.payload.newDish
                    } 
                    : recipe
                )
            };
            return newState
        default:
            return state;
    }
}