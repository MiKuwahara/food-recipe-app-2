import {useState} from "react";
import SearchIcon from "../search.svg";
import {Link} from "react-router-dom";
import {SlMagnifier} from "react-icons/sl";

function Header({searchRecipes, setSearchTerm, searchTerm}) {
    
    //const [searchTerm, setSearchTerm] = useState("");

    return (
        <header className='header'>
                <h1>Sulitin.Mo.Grocery.Mo.</h1>
      
                <input className="search"
                    placeholder="Search for recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchRecipes(searchTerm)}
            />
              


        </header>
    )
}

export default Header