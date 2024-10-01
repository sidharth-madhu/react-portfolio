import React from "react";
import "./index.css"
import Homee from "./routes/Homee"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import About from "./routes/About"

import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>

    <Route path="/" element={<Homee/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />

    </Routes>
    </>
  );
}

export default App;
