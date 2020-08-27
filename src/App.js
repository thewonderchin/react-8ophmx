import React,{useEffect, useState} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spells from './spells';

const App = () => {

  const APP_ID = '';
  const APP_KEY = '';

  const [spells, setSpells] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("fireball");

  useEffect(() =>{
    getSpells();
  }, []);

  const getSpells = async () => {
    const response = await fetch(`https://www.dnd5eapi.co/api/spells/${query}`);
    const data = await response.json();
    setSpells(data.hits);
    console.log(data.hits);
  };

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
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
      {spells}
    </div>
  );
};

export default App;