import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">

            <h2>FestNest</h2>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>

            </div>

            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

        </nav>
    );
}

export default Navbar;