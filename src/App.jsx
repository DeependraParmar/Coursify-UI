import { ProtectedRoute } from "protected-route-react";
import React, { Suspense, useEffect, startTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "./components/Loading";
import Admin from "./pages/Admin/Admin";
import InstructorCourseDetailsEdit from "./pages/Instructor/InstructorCourseDetailsEdit";
import InstructorCoursePage from "./pages/Instructor/InstructorCoursePage";
import InstructorEarning from "./pages/Instructor/InstructorEarning";
import InstructorHome from "./pages/Instructor/InstructorHome";
import InstructorMyCourses from "./pages/Instructor/InstructorMyCourses";
import InstructorNewCourse from "./pages/Instructor/InstructorNewCourse";
import InstructorStats from "./pages/Instructor/InstructorStats";
import { getMyProfile } from "./redux/actions/user";
import "./styles/App.scss";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Header = React.lazy(() => import("./pages/Layout/Header"));
const Courses = React.lazy(() => import("./pages/Courses/Courses"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
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

  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);
  const isAuthorizedCourseUser = false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        toastId: "error-toast"
      });
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        toastId: "success-toast"
      });
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
        dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} user={user} loading={loading} />
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
            <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Profile user={user} loading={loading} /></ProtectedRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login loading={loading} /></ProtectedRoute>} />
            <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile" ><SignUp loading={loading} /></ProtectedRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/profile/edit" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><EditProfile user={user} /></ProtectedRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><ResetPassword /></ProtectedRoute>} />

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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          theme="dark"
          style={{ fontSize: '0.85rem' }}
        />
      </Router>
    </>
  )
}

export default App;