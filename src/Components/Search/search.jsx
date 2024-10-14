import React, { useState } from "react";
import useWordParamStore from "../stores/WordParam";
import './Search.css'; 

function Search() {
  const changeWord = useWordParamStore((state) => state.setWord);

  const [wordParam, setWordParam] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    changeWord(wordParam);
  };

  return (
    <div className="search">
      <h2>my dictionary: made by Florah nduati</h2>
      <div className="form-group">
        <label htmlFor="word" className="form-group-label">
          <input
            type="text"
            className="input"
            placeholder="search any word"
            value={wordParam}
            onChange={(e) => setWordParam(e.target.value)}
          />
        </label>
        <label htmlFor="Search" className="form-group-label">
          <button className="button" onClick={handleSearch}>Search</button>
        </label>
      </div>
    </div>
  );
}

export default Search;
