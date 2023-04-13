import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Results from "./components/Results/Results";
import requests from "./components/Requests/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(
    requests.fetchActionMovies
  );
  return (
    <div className="app">
      <Header />

      <Navigation setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
