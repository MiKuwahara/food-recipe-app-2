import { useState } from "react";
import SearchIcon from "../assets/search.svg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { PiBowlFoodLight } from "react-icons/pi";
import { SiIfood } from "react-icons/si";

function Header({ searchRecipes, setSearchTerm, searchTerm }) {

    //const [searchTerm, setSearchTerm] = useState("");

    return (
        <header className='header'>
            <div className="logo-brand-name">
                <PiBowlFoodLight className="logo-icon" />
                <h1>Sulitin.Mo.Grocery.Mo.</h1>
            </div>

            <div className="input-with-icon-container">
                <input className="search"
                    placeholder="Search for recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch
                    className="search-img"
                    alt="search"
                    onClick={() => searchRecipes(searchTerm)}
                />
            </div>



        </header>
    )
}

export default Header