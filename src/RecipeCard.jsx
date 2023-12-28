import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


//const API_URL2 = "https://api.spoonacular.com/recipes/{id}/card?apiKey=" + process.env.REACT_APP_API_KEY;
const API_URL2 = "https://api.spoonacular.com/recipes";

const RecipeCard = ({ recipe: { id, title, image, imageType, summary, sourceUrl, spoonacularSourceUrl, readyInMinutes, servings } }) => {

    const [recipe, setRecipe] = useState();

    const getRecipe = async (id) => {
        const response = await fetch(`${API_URL2}/${id}/card?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();

        console.log(data);
        console.log(data.url)
        setRecipe(data);

    };

    useEffect(() => {
        getRecipe(id);
    }, []);

    return (
        <div className="card">

            <div className="card_body">
                <img src={image ? image : "https://via.placeholder.com/400"} alt={title} className="card_image" />

                <h2 className="card_title">{title ? title : "Hawaiian Pizza"}</h2>

                <div className="card_details"></div>
                
                <p className="card_description">{summary}</p>



                {/**    <p className="card_description"> 
              Shabby chic humblebrag banh mi bushwick, banjo kale chips
              meggings. Cred selfies sartorial, cloud bread disrupt blue bottle
              seitan. Dreamcatcher tousled bitters, health goth vegan venmo
              whatever street art lyft shabby chic pitchfork beard. Drinking
              vinegar poke tbh, iPhone coloring book polaroid truffaut tousled
              ramps pug trust fund letterpress. Portland four loko austin
              chicharrones bitters single-origin coffee. Leggings letterpress
              occupy pour-over.</p> */}

            </div>

            {/**
                <button className="card_btn"><Link to="/details">Go to Recipe</Link></button>
                <a href={sourceUrl}>Go to Recipe</a> */}
            <a className="card_btn" href={spoonacularSourceUrl}>Go to Recipe</a>


        </div>
    );
};

export default RecipeCard;