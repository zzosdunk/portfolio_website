import React from "react";
import "@fontsource/montserrat";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Header from "./containers/header/header";
import SkillsList from "./components/skills/SkillsList";
import Footer from "./containers/Footer/Footer";
import ContactMe from "./components/Contact/ContactMe";
import Experience from "./containers/Experience/Experience";
import Projects from "./containers/Projects/Projects";


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Experience />
        <SkillsList />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
