import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.REACT_APP_API_KEY + "&addRecipeInformation=true";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

    console.log(typeof rep);

    const searchRecipes = async (title) => {
        //const response = await fetch(`${API_URL}&query=${title}`);
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true&query=${title}`);
        const data = await response.json();

        console.log(data.results);
        setRecipes(data.results);

    };


    useEffect(() => {
        searchRecipes("Pizza");
    }, []);

    return (
        // Surrounded by Empty Fragment
        <>
            <Router>
                <div className='app'>

                    <div className="head">
                        <Header searchRecipes={searchRecipes} setSearchTerm={setSearchTerm} searchTerm={searchTerm}  />
                    </div>
                    
                    <Routes>
                        <Route path='/' element={<Home recipes={recipes}/>} />
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