import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMenuBook, MdAccessTime, MdOutlinePerson } from "react-icons/md";


//const API_URL2 = "https://api.spoonacular.com/recipes/{id}/card?apiKey=" + process.env.REACT_APP_API_KEY;
const API_URL2 = "https://api.spoonacular.com/recipes";

const RecipeCard = ({ recipe: { id, title, image, imageType, summary, sourceUrl, spoonacularSourceUrl, readyInMinutes, servings,  } }) => {

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
<img src={image ? image : "https://via.placeholder.com/400"} alt={title} className="card_image" />
            <div className="card_body">
                

                <h2 className="card_title">{title ? title : "Hawaiian Pizza"}</h2>
             
                <div className="card_details">
                    <div className="time">
                        <div className="time_row1">
                            <MdAccessTime className="icon" />
                            <p className="row1">{readyInMinutes}</p>
                        </div>
                        <div className="time_row2">
                            <p className="row2">Minutes</p>
                        </div>
                    </div>
                   {/**
                    *  <div className="ingredient_count">
                        <div className="ingredient_count_row1">
                            <MdMenuBook className="icon" />
                            <p className="row1">5</p>
                        </div>
                        <div className="ingredient_count_row2">
                            <p className="row2">Ingredients</p>
                        </div>
                    </div>
                    */}
                    <div className="serving">
                        <div className="serving_row1">
                            <MdOutlinePerson className="icon" />
                            <p className="row1">{servings}</p>
                        </div>
                        <div className="serving_row2">
                            <p className="row2">Serving</p>
                        </div>
                    </div>
                </div>

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