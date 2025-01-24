import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Guitar from "./pages/Guitar";
import Drums from "./pages/Drums";
import Piano from "./pages/Piano";
import ContactUs from "./pages/ContactUs";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import CreateLessonPage from "./pages/CreateLessonPage";
import PostPage from "./pages/PostPage";
import CourseDetail from "./pages/CourseDetails";
import AllPosts from "./pages/AllPosts";
import MyEnrollments from "./pages/MyEnrollments";
import StudentEnrolledCourses from "./pages/StudentEnrolledCourses";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/drums" element={<Drums />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/create-lesson" element={<CreateLessonPage />} />
          <Route path="/post-page" element={<PostPage />} />
          <Route path="/post/:id" element={<CourseDetail />} /> {/* New Post Detail Route */}
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/enrollment" element={<MyEnrollments />} />
          <Route path="/student-enrollment" element={<StudentEnrolledCourses />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
