import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import UserContextProvider from './context.js/UserContext';

const App = () => {
    return (
      <div>
        <UserContextProvider>
          <Navigation/>
          <Footer/>
        </UserContextProvider>
      </div>
    )
}

export default App;