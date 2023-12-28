import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeCard from "../RecipeCard";
import SearchIcon from "../search.svg";
//import RecipeCard from "./RecipeCard";
const rep = [
    {
        "id": "12345",
        "title": "The Everyday Salad",
        "image": "https://via.placeholder.com/400",
        "imageType": "jpg",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
        "id": "12345",
        "title": "Simple Risotto",
        "image": "https://via.placeholder.com/400",
        "imageType": "jpg",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
        "id": "12345",
        "title": "Baked Cod with Vegetables",
        "image": "https://via.placeholder.com/400",
        "imageType": "jpg",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
        "id": "12345",
        "title": "Baked Cod with Vegetables",
        "image": "https://via.placeholder.com/400",
        "imageType": "jpg",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
        "id": "12345",
        "title": "Baked Cod with Vegetables",
        "image": "https://via.placeholder.com/400",
        "imageType": "jpg",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
        "id": "12345",
        "title": "Baked Cod with Vegetables",
        "image": "https://via.placeholder.com/400",
        "imageType": "jpg",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
  
];

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.REACT_APP_API_KEY + "&addRecipeInformation=true";
const API_URL2 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + process.env.REACT_APP_API_KEY +"&addRecipeInformation=true";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    console.log(typeof rep);

    const searchRecipes = async (title) => {
        const response = await fetch(`${API_URL}&query=${title}`);
        const data = await response.json();

        console.log(data.results);
        setRecipes(data.results);

    };


    useEffect(() => {
        searchRecipes("Pizza");
    }, []);


    return (
            <div className="wrapper">
                {/*sometimes the code wont work if formatting is not correct. weird!!*/}
                {recipes?.length > 0 ? (
                    <>
                        {recipes.map((r) => (
                            <RecipeCard recipe={r} />
                        ))}
                    </>
                ) : (
                    <>
                        {rep.map((r) => (
                            <RecipeCard recipe={r} />
                        ))}
                    </>
                )}

            </div>
       
    );
}

export default Home;

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