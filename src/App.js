import React from 'react';
import Header from './components/Header';
import './App.css';

import AppRouter from './components/AppRouter';
import "bootstrap/dist/css/bootstrap.min.css";
// import CarosalPage from './components/CarosalPage';
// import Recipes from './components/Recipes';
// import RecipesPage from './components/RecipesPage';

function App() {
  return (
    <div className="App">
      {/* <Header />
    
      <CarosalPage/>
     <Recipes/>
      <RecipesPage/> */}
      <AppRouter/>
    </div>
  );
}

export default App;
