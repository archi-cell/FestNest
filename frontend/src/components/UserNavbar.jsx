import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useTheme } from "../context/ThemeContext";

function UserNavbar() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-fest">Fest</span>
                <span className="brand-nest">Nest</span>
            </div>

            <div className="nav-links">
                <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
                <Link to="/events" className={isActive("/events") ? "active" : ""}>Events</Link>
                <Link to="/hotels/stay" className={isActive("/hotels/stay") ? "active" : ""}>Stay</Link>
                <Link to="/hotels/events" className={isActive("/hotels/events") ? "active" : ""}>Event Hotels</Link>
                <Link to="/login" className={isActive("/login") ? "active" : ""}>Login</Link>
                <Link to="/register" className={isActive("/register") ? "active" : ""}>Register</Link>
            </div>

            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </nav>
    );
}

export default UserNavbar;
