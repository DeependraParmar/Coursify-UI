import React, { Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss"
import LoadingComponent from "./components/Loading";
import Admin from "./pages/Admin/Admin";

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
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs"));
const CourseDescription = React.lazy(() => import("./pages/Courses/CourseDescription"))
const CourseWatchPage = React.lazy(() => import("./pages/Courses/CourseWatchPage"))

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const isAuthorizedCourseUser = true;

  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<LoadingComponent />}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={
              isAuthorizedCourseUser ?
                <CourseWatchPage /> :
                <CourseDescription />
            } />
            <Route path="/courses/:id/:lectureid" element={<CourseWatchPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* admin routes  */}
            <Route path="/admin/home" element={<Admin />} />
          </Routes>
            </Suspense>
          <Footer />
      </Router>
    </>
  )
}

export default App;