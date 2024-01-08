import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Layout/Header";
import "./styles/App.scss"
import Courses from "./pages/Courses/Courses";

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/courses" element = {<Courses />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;