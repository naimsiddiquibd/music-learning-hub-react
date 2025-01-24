import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";

const Navbar = () => {
  const { auth, logout } = useAuth();
  console.log("Role:", auth.role);

  return (
    <nav>
      <div className="navbar pt-10 m-0">
        <Link className="flex-1 gap-3" to="/">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" />
            <p className="text-white text-xl">MUSIC LEARNING HUB</p>
          </div>
        </Link>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li>
              <details>
                <summary>Instructors</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><Link to="/guitar">Guitar</Link></li>
                  <li><Link to="/piano">Piano</Link></li>
                  <li><Link to="/drums">Drums</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            {/* Render role-based navigation items */}
            {auth.isAuthenticated && auth.role === "instructor" && (
              <>
                <li><Link to="/instructor/dashboard">Instructor Dashboard</Link></li>
                <li><Link to="/instructor/courses">My Courses</Link></li>
              </>
            )}
            {auth.isAuthenticated && auth.role === "student" && (
              <>
                <li><Link to="/student/dashboard">Student Dashboard</Link></li>
                <li><Link to="/student/my-lessons">My Lessons</Link></li>
              </>
            )}
          </ul>

          {/* Authentication status */}
          {auth.isAuthenticated ? (
            <Button variant="primary" size="sm" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Link to="/register">
              <Button variant="primary" size="sm">
                Signup
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
