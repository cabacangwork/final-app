import React, {Component} from 'react';
import RecipeContextProvider from './contexts/RecipeContext';
import Navigation from './components/Navigation';

class App extends Component{
  render() { 
    return (
        <RecipeContextProvider>
            <Navigation/>
        </RecipeContextProvider>
    )
  }

}

export default App;