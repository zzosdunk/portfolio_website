import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

import "@fontsource/montserrat";
import "./App.css";

import messages_pl from "./translations/pl.json";
import messages_ua from "./translations/ua.json";
import messages_en from "./translations/en.json";

import Navbar from "./components/navbar/navbar";
import Header from "./containers/header/header";
import SkillsList from "./components/skills/SkillsList";
import Footer from "./containers/Footer/Footer";
import ContactMe from "./components/Contact/ContactMe";
import Experience from "./containers/Experience/Experience";
import Projects from "./containers/Projects/Projects";

const messages = {
  'Polish': messages_pl,
  'Ukrainian': messages_ua,
  'English': messages_en
};

function App() {

  const currentLanguage = useSelector((state) => state.lang.language);

  return (
    <IntlProvider locale={navigator.language} messages={messages[currentLanguage]}>
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
    </IntlProvider>
  );
}

export default App;
