import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
//import Rental from './pages/Rental'
//import About from './pages/About'
//import Error from './pages/Error'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
