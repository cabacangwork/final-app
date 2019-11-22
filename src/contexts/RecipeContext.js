 
import React, { createContext, useReducer } from 'react';
import { recipeReducer } from '../reducers/recipeReducer';
import { initialData } from '../reducers/initialData';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
  const [list, dispatch] = useReducer(recipeReducer, initialData);
  
  return (
    <RecipeContext.Provider value={{ list, dispatch }}>
        {props.children}
    </RecipeContext.Provider>
  );
}
 
export default RecipeContextProvider;