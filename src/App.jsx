import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Layout/Header";
import "./styles/App.scss"
import Login from "./pages/Auth/Login";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App;