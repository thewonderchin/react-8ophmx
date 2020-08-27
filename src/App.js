import React,{useEffect, useState} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './recipe';

const App = () => {

  const APP_ID = 'd9b897d5';
  const APP_KEY = 'a71b6348dce1eb66cf502760bcc4ff03';

  const [recipes, setRecipes] = useState([]);

  useEffect(() =>{
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }
  return(
    <div className="containerfluid text-center">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">FIND NOW</button>
      </form>
    </div>
  );
}

export default App;