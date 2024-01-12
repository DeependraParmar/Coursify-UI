import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Layout/Header";
import "./styles/App.scss"
import Courses from "./pages/Courses/Courses";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import EditProfile from "./pages/Profile/EditProfile";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/courses" element = {<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;