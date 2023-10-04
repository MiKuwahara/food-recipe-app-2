import React from "react";

const RecipeCard = ({recipe: { title, image, imageType } }) => {
    return (
        <div className="recipe">
          
            <div>
                <img src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={title} />
            </div>

            <div>
                <h3>{title}</h3>
                <span>{imageType}</span>
                <button>{title}</button>
            </div>
        
        </div>
    );
};

export default RecipeCard;