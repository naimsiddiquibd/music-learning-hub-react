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
                <div className="flex-1 gap-3">
                    <img src="/logo.svg" alt="" />
                    <p className="text-white text-xl">MUSIC LEARNING HUB</p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Instructors</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Guitar</a></li>
                                    <li><a>Piano</a></li>
                                    <li><a>Drams</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <Button variant="primary" size="sm">
                        Signup
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
