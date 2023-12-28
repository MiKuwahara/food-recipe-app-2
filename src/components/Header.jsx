import {useState} from "react";
import SearchIcon from "../search.svg";
import {Link} from "react-router-dom";

function Header({searchRecipes}) {
    
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <header className='header'>
                <h1>Sulitin.Mo.Grocery.Mo.</h1>
      
                <input className="search"
                    placeholder="Search for recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
              


        </header>
    )
}

export default Header