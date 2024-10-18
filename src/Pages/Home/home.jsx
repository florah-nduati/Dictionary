import React from "react";
import Search from '../../Components/Search/search';
import Results from "../../Components/Results/results";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="search-section">
        <Search />
      </div>
      <div className="results-section">
        <Results />
      </div>
    </div>
  );
}

export default Home;
