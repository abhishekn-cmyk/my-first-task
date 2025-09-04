import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./index.css";
import About from "./components/About";
import Blog from "./components/Blog";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header stays constant */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog/>} />
          {/* Add more routes here if needed */}
        </Routes>

        {/* Footer stays constant */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
