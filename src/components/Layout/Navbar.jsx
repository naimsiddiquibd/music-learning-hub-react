import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav>
            {/* {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )} */}
            <div className="navbar  pt-10 m-0">
                <Link  className="flex-1 gap-3" to="/">
                    <div  className="flex items-center gap-3">
                        <img src="/logo.svg" alt="" />
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
                                    <li><Link to="/drums">Drams</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <Link to="/register">
                        <Button variant="primary" size="sm">
                            Signup
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
