import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./ErrorBoundary";
import LoadingComponent from "./components/Loading";
import { getMyProfile } from "./redux/actions/user";
import "./styles/App.scss";

import BottomToTop from "./components/BottomToTop";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Header = React.lazy(() => import("./pages/Layout/Header"));
const Courses = React.lazy(() => import("./pages/Courses/Courses"));
const MyCourses = React.lazy(() => import("./pages/Courses/MyCourses"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
const PublicProfile = React.lazy(() => import("./pages/Profile/PublicProfile"));
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
const TermsAndConditions = React.lazy(() => import("./pages/Policy/TermsAndConditions"));
const RefundPolicy = React.lazy(() => import("./pages/Policy/RefundPolicy"));
const PrivacyPolicy = React.lazy(() => import("./pages/Policy/PrivacyPolicy"));

const InstructorCourseAddLecture = React.lazy(() => import("./pages/Instructor/InstructorCourseAddLecture"))
const InstructorCourseDetailsEdit = React.lazy(() => import("./pages/Instructor/InstructorCourseDetailsEdit"));
const InstructorCoursePage = React.lazy(() => import("./pages/Instructor/InstructorCoursePage"));
const InstructorEarning = React.lazy(() => import("./pages/Instructor/InstructorEarning"));
const InstructorHome = React.lazy(() => import("./pages/Instructor/InstructorHome"));
const InstructorMyCourses = React.lazy(() => import("./pages/Instructor/InstructorMyCourses"));
const InstructorNewCourse = React.lazy(() => import("./pages/Instructor/InstructorNewCourse"));
const InstructorStats = React.lazy(() => import("./pages/Instructor/InstructorStats"));
const InstructorRegistration = React.lazy(() => import("./pages/Instructor/InstructorRegistration"));
const InstructorWatchPage = React.lazy(() => import("./pages/Instructor/InstructorCourseWatchPage"));

const Admin = React.lazy(() => import("./pages/Admin/Admin"));
const AdminUsers = React.lazy(() => import("./pages/Admin/AdminUsers"));
const AdminApproval = React.lazy(() => import("./pages/Admin/AdminApproval"));
const SpecificApproval = React.lazy(() => import("./pages/Admin/SpecificApprovalRequest"));
const AdminTransactions = React.lazy(() => import("./pages/Admin/AdminTransactions"));
const AdminCourses = React.lazy(() => import("./pages/Admin/AdminCourses"));
const AdminCourseWatchPage = React.lazy(() => import("./pages/Admin/AdminCourseWatchPage"));
const AdminDropbox = React.lazy(() => import("./pages/Admin/AdminDropbox"));
const AdminBlogs = React.lazy(() => import("./pages/Admin/AdminBlogs"));
const AdminYoutube = React.lazy(() => import("./pages/Admin/AdminYoutube"));
const AdminYoutubeNew = React.lazy(() => import("./pages/Admin/AdminYoutubeNew"));
const AdminYoutubeCourses = React.lazy(() => import("./pages/Admin/AdminYoutubeCourses"));
const AdminYoutubeSpecificCourse = React.lazy(() => import("./pages/Admin/AdminYoutubeSpecificCourse"));
const AdminYoutubeCourseEditPage = React.lazy(() => import("./pages/Admin/AdminYoutubeCourseEditPage"));
const AdminYoutubeAddLecture = React.lazy(() => import("./pages/Admin/AdminYoutubeAddLecture"));
const AdminYoutubeLectureEdit = React.lazy(() => import("./pages/Admin/AdminYoutubeLectureEdit"));

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
      toast.error(error, { toastId: 'appToastError' });
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message, { toastId: 'appToastSuccess' });
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

              <Route path="/mycourses" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectUrl={'/login'} ><MyCourses courses={user?.courses} /></ProtectedRoute>} />

              <Route path="/courses/:id/:lectureid" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectUrl={'/login'}><CourseWatchPage /></ProtectedRoute>} />

              <Route path="/profile" element={<ProtectedRoute redirectUrl={'/login'} isAuthenticated={isAuthenticated} ><Profile user={user} loading={loading} /></ProtectedRoute>} />
              
              <Route path="/profile/edit" element={<ProtectedRoute redirectUrl={'/login'} isAuthenticated={isAuthenticated} ><EditProfile /></ProtectedRoute>} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/profile/public/:id" element={<PublicProfile />} />

              <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirectUrl="/" ><Login loading={loading} /></ProtectedRoute>} />

              <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirectUrl="/" ><SignUp /></ProtectedRoute>} />

              <Route path="/about" element={<About />} />

              <Route path="/blogs" element={<Blogs />} />

              <Route path="/terms-and-conditions" element = {<TermsAndConditions />} />
              <Route path="/cancellation-and-refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />


              <Route path="/forgot-password" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirectUrl="/profile" ><ForgotPassword /></ProtectedRoute>} />

              <Route path="/reset-password" element={<ProtectedRoute redirectUrl={'/login'} isAuthenticated={isAuthenticated} ><ResetPassword /></ProtectedRoute>} />

              <Route path="/resetpassword/:token" element={<NewPassword />} />

              <Route path="/paymentsuccess" element={<PaymentSuccess />} />

              <Route path="/paymentfailed" element={<PaymentFail />} />


              {/* instructor routes  */}
              <Route path="/register-as-instructor" element={<ProtectedRoute isAuthenticated={isAuthenticated && !user?.isVerifiedInstructor} redirectUrl={'/login'}><InstructorRegistration /></ProtectedRoute>} />

              <Route path="/instructor/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorHome /></ProtectedRoute>} />

              <Route path="/instructor/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorMyCourses /></ProtectedRoute>} />

              <Route path="/instructor/courses/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorCoursePage /></ProtectedRoute>} />

              <Route path="/instructor/courses/:id/:lectureid" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorWatchPage /></ProtectedRoute>} />

              <Route path="/instructor/courses/edit/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorCourseDetailsEdit /></ProtectedRoute>} />

              <Route path="/instructor/courses/:id/add-lecture" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorCourseAddLecture /></ProtectedRoute>} />

              <Route path="/instructor/courses/new" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorNewCourse /></ProtectedRoute>} />

              <Route path="/instructor/stats" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorStats /></ProtectedRoute>} />

              <Route path="/instructor/earning" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedInstructor={user?.isVerifiedInstructor} redirectUrl={'/register-as-instructor'}><InstructorEarning /></ProtectedRoute>} />


              {/* admin routes  */}
              <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><Admin /></ProtectedRoute>} />
              <Route path="/admin/users" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminUsers /></ProtectedRoute>} />
              <Route path="/admin/approval-requests" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminApproval /></ProtectedRoute>} />
              <Route path="/admin/approval-requests/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><SpecificApproval /></ProtectedRoute>} />
              <Route path="/admin/transactions/all" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminTransactions /></ProtectedRoute>} />
              <Route path="/admin/courses/all" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminCourses /></ProtectedRoute>} />
              <Route path="/admin/courses/:id/:lectureid" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminCourseWatchPage /></ProtectedRoute>} />
              <Route path="/admin/dropbox" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminDropbox /></ProtectedRoute>} />
              <Route path="/admin/blogs" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminBlogs /></ProtectedRoute>} />
              <Route path="/admin/youtube" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutube /></ProtectedRoute>} />
              <Route path="/admin/youtube/new" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutubeNew /></ProtectedRoute>} />
              <Route path="/admin/youtube/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutubeCourses /></ProtectedRoute>} />
              <Route path="/admin/youtube/courses/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutubeSpecificCourse /></ProtectedRoute>} />
              <Route path="/admin/youtube/edit/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutubeCourseEditPage /></ProtectedRoute>} />
              <Route path="/admin/youtube/courses/:id/add-lecture" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutubeAddLecture /></ProtectedRoute>} />
              <Route path="/admin/youtube/courses/:id/:lectureid/edit" element={<ProtectedRoute isAuthenticated={isAuthenticated} isVerifiedAdmin={user?.isVerifiedAdmin} redirectUrl={'/'}><AdminYoutubeLectureEdit /></ProtectedRoute>} />


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
            style={{ fontSize: '0.9rem' }}
          />
          <BottomToTop />
        </Router>
      </ErrorBoundary>
    </>
  )
}

export default App;