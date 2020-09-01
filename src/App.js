import React,{useEffect, useState} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './character';

const App = () => {

  const APP_ID = '';
  const APP_KEY = '';

  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("18082051");

  useEffect(() =>{
    getCharacter();
  }, [{}]);

  const getCharacter = async () => {
    const response = await fetch(`https://character-service.dndbeyond.com/character/v3/character/${query}`);
    const data = await response.json();
    console.log(data);
    setCharacter(data);
  };

const updateSearch = e => {
  setSearch(e.target.value);
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
};

  return(
    <div className="containerfluid text-center">
      <form 
        className="search-form"
        onSubmit={getSearch}
      >
        <input 
          className="search-bar" 
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button 
          className="search-button" 
          type="submit">
          FIND NOW
        </button>
      </form>
 
    </div>
  );
};

export default App;