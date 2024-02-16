import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/variables.css";
import Home from "./pages/Home/Home";
import Rental from "./pages/Rental/Rental";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Rental" element={<Rental />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
