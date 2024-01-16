import React, { Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss"
import LoadingComponent from "./components/Loading";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Header = React.lazy(() => import("./pages/Layout/Header"));
const Courses = React.lazy(() => import("./pages/Courses/Courses"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const EditProfile = React.lazy(() => import("./pages/Profile/EditProfile"));
const ForgotPassword = React.lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./pages/Auth/ResetPassword"));
const Footer = React.lazy(() => import("./pages/Layout/Footer"));
const About = React.lazy(() => import("./pages/About/About"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Suspense fallback={<LoadingComponent />}> <Home /> </Suspense>} />
          <Route path="/courses" element = {<Suspense fallback={<LoadingComponent />}> <Courses /></Suspense>} />
          <Route path="/profile" element={<Suspense fallback={<LoadingComponent />}> <Profile /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingComponent />}> <Contact /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingComponent />}> <About /></Suspense>} />
          <Route path="/profile/edit" element={<Suspense fallback={<LoadingComponent />}> <EditProfile /></Suspense>} />
          <Route path="/forgot-password" element={<Suspense fallback={<LoadingComponent />}> <ForgotPassword /></Suspense>} />
          <Route path="/reset-password" element={<Suspense fallback={<LoadingComponent />}> <ResetPassword /></Suspense>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;