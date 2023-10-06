import React from "react";
import { useState, useEffect } from "react";
import './App.css';

import RecipeCard from "./RecipeCard";
import SearchIcon from "./search.svg";
//import RecipeCard from "./RecipeCard";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.REACT_APP_API_KEY;

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchRecipes = async (title) => {
        const response = await fetch(`${API_URL}&query=${title}`);
        const data = await response.json();

        console.log(typeof data.results);
        setRecipes(data.results);
        
    };

  
    useEffect(() => {
        searchRecipes("Pizza");
    },[]);


    return (
        <div className="app">
        <h1>Sulitin.Mo.Grocery.Mo.</h1>

        <div className="search">
            <input 
                placeholder="Search for recipes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchRecipes(searchTerm)}
            />
            {/*}
            <button
                onClick={() => searchRecipes(searchTerm)}
                >Search
            </button>
            */}
        </div>

        {/*sometimes the code wont work if formatting is not correct. weird!!*/}
        {recipes?.length > 0 ? (
            <div className="container">
                {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} />
                ))}
            </div>
        ) : (
            <div className="empty">
            <h2>No recipes found</h2>
            </div>
        )}
        
        </div>
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