import './styles/App.css';
import React, {Component} from "react";
import Education from "./components/Education.js"
import Experience from "./components/Experience.js"
import Personal from "./components/Personal.js"

function App() {
  return (
    <div className="App">
        <h1>CV builder</h1>  
        <Personal />
        <Education />
        <Experience />
    </div>
  );
}

export default App;