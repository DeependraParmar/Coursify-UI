import { ProtectedRoute } from "protected-route-react";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./ErrorBoundary";
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
import BottomToTop from "./components/BottomToTop";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Header = React.lazy(() => import("./pages/Layout/Header"));
const Courses = React.lazy(() => import("./pages/Courses/Courses"));
const MyCourses = React.lazy(() => import("./pages/Courses/MyCourses"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
const NotFound = React.lazy(() => import("./pages/Layout/NotFound"))
const EditProfile = React.lazy(() => import("./pages/Profile/EditProfile"));
const ForgotPassword = React.lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./pages/Auth/ResetPassword"));
const NewPassword = React.lazy(() => import("./pages/Auth/NewPassword"));
const PaymentSuccess = React.lazy(() => import("./pages/Payment/PaymentSuccess"));
const PaymentFail = React.lazy(() => import("./pages/Payment/PaymentFailed"));
const Footer = React.lazy(() => import("./pages/Layout/Footer"));
const About = React.lazy(() => import("./pages/About/About"));
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs"));
const CourseDescription = React.lazy(() => import("./pages/Courses/CourseDescription"))
const CourseWatchPage = React.lazy(() => import("./pages/Courses/CourseWatchPage"))
const InstructorCourseAddLecture = React.lazy(() => import("./pages/Instructor/InstructorCourseAddLecture"))


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);


  return (
    <>
      <ErrorBoundary>
        <Router>
          <Header isAuthenticated={isAuthenticated} user={user} />

          <Suspense fallback={<LoadingComponent />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDescription user={user} />} />
              <Route path="/mycourses" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><MyCourses courses={user && user.courses} /></ProtectedRoute>} />
              <Route path="/courses/:id/:lectureid" element={<ProtectedRoute isAuthenticated={isAuthenticated}><CourseWatchPage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Profile user={user} loading={loading} /></ProtectedRoute>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile" ><Login loading={loading} /></ProtectedRoute>} />
              <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile" ><SignUp /></ProtectedRoute>} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/profile/edit" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><EditProfile user={user} /></ProtectedRoute>} />
              <Route path="/forgot-password" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile" ><ForgotPassword /></ProtectedRoute>} />
              <Route path="/reset-password" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><ResetPassword /></ProtectedRoute>} />
              <Route path="/resetpassword/:token" element={<NewPassword />} />

              <Route path="/paymentsuccess" element={<PaymentSuccess />} />
              <Route path="/paymentfailed" element={<PaymentFail />} />

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


              <Route path="/*" element={<NotFound />} />
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
            stacked
            draggable
            theme="dark"
            style={{ fontSize: '0.85rem' }}
          />
          <BottomToTop />
        </Router>
      </ErrorBoundary>
    </>
  )
}

export default App;