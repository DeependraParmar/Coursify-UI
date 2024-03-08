import React, { Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss"
import LoadingComponent from "./components/Loading";
import Admin from "./pages/Admin/Admin";
import InstructorHome from "./pages/Instructor/InstructorHome";
import InstructorMyCourses from "./pages/Instructor/InstructorMyCourses";
import InstructorNewCourse from "./pages/Instructor/InstructorNewCourse";
import InstructorStats from "./pages/Instructor/InstructorStats";
import InstructorEarning from "./pages/Instructor/InstructorEarning";
import InstructorCoursePage from "./pages/Instructor/InstructorCoursePage";
import InstructorCourseDetailsEdit from "./pages/Instructor/InstructorCourseDetailsEdit";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { getMyProfile } from "./redux/actions/user";

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
const InstructorCourseAddLecture = React.lazy(() => import("./pages/Instructor/InstructorCourseAddLecture"))

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  const {isAuthenticated, user, message, error} = useSelector(state => state.user);
  const isAuthorizedCourseUser = false;

  const dispatch = useDispatch();

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type: "clearError"});
    }
    if(message){
      toast.success(message);
      dispatch({type: "clearMessage"});
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getMyProfile())
  }, [dispatch]);


  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} user={user} />
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

            {/* instructor routes  */}
            <Route path="/instructor/dashboard" element={<InstructorHome />} />
            <Route path="/instructor/courses" element={<InstructorMyCourses />} />
            <Route path="/instructor/courses/:id" element={<InstructorCoursePage />} />
            <Route path="/instructor/courses/:id/edit" element={<InstructorCourseDetailsEdit />} />
            <Route path="/instructor/courses/:id/add-lecture" element={<InstructorCourseAddLecture />} />
            <Route path="/instructor/courses/new" element={<InstructorNewCourse />} />
            <Route path="/instructor/stats" element={<InstructorStats />} />
            <Route path="/instructor/earning" element={<InstructorEarning />} />

            {/* admin routes  */}
            <Route path="/admin/home" element={<Admin />} />
          </Routes>
            </Suspense>
          <Footer />
          <Toaster toastOptions={
            {
              position: "top-right",
              duration: 5000,
              success: {
                style: {
                  fontFamily: "inherit",
                  fontSize: "0.85rem"
                }
              },
              error: {
                style: {
                  fontFamily: "inherit",
                  fontSize: "0.85rem"
                }
              }
            }
          } />
      </Router>
    </>
  )
}

export default App;