import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Introduction/>
        <About/>
        <Projects/>
        <HashLink to="#top" smooth id="back-to-top">
          Back to Top.
        </HashLink>
        <ContactMe/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
