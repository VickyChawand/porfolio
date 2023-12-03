import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import React, { useContext } from "react";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Porfolio from "./Components/Porfolio/Porfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Porfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
