/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const[searchTerm,setSearchTerm] = useState('');
  
  const search = () => {
    props.onSearch(searchTerm);
      setSearchTerm("");
  }
  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleTermChange}/>
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
