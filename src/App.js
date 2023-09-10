import "./App.css";
import { useState } from "react";
import Items from "./Components/Items";
// import Items from "./Components/Items";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [searchData, setSearchData] = useState([]);
  let items = null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(searchItem)
    if (searchItem === "") {
      alert("Enter a food name to search");
    } else {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
      );
      const jsondata = await data.json();
      if (jsondata.meals === null) {
        alert("no food found");
      } else {
        setSearchData(jsondata.meals);
        // console.log(searchData.length)
      }
    }
    e.target.reset();
    setSearchItem('');
  };

  if (searchData.length > 0) {
    items = <Items searchData={searchData} />;
  }
  return (
    <div className="app bg">
      <div className="about">
        <h1>Welcome to foodie cookie</h1>
        <h3>You can find your favourite food's recepies here</h3>
        <div className="do">
          <h4>Want recepies in written format?</h4>
          <h4>Need a visual experience?</h4>
        </div>
        <p>You can get both !</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          placeholder="Food name"
          aria-label="type food name to search"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit" className="sbtn">
          Search
        </button>
      </form>
      {items}
      <p className="end">...................Thank you for visiting...................</p>
    </div>
  );
}

export default App;
