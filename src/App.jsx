import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Test from "./components/Test";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Selenium from "./components/Selenium";
import Cypress from "./components/Cypress";
import Playwright from "./components/Playwright";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Nav />
      <div className="container-xl my-5 pb-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/practice" element={<Test />} />
          <Route path="/selenium" element={<Selenium />} />
          <Route path="/cypress" element={<Cypress />} />
          <Route path="/playwright" element={<Playwright />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
