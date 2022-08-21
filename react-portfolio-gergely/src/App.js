import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
