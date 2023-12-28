import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import RecipeDetails from "./RecipeDetails";


const App = () => {

    return (
        // Surrounded by Empty Fragment
        <>
            <Router>
                <div className='app'>

                    <div className="head">
                        <Header searchRecipes={() => { }} />
                    </div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/details' element={<RecipeDetails />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;

/**
 * {recipes?.length > 0 ? (
        <div className="container">
          {recipes.map((recipe) => {
            <RecipeCard recipe={recipe}/>
          })}
        </div>
      ):(
        <div className="empty">
          <h2>No recipes found</h2>
        </div>
      )}
 */