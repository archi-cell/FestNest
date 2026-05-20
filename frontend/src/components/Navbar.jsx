import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
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
                <Link to="/admin-dashboard" className={isActive("/admin-dashboard") ? "active" : ""}>Dashboard</Link>
                <Link to="/create-event" className={isActive("/create-event") ? "active" : ""}>Create Event</Link>
                <Link to="/admin-events" className={isActive("/admin-events") ? "active" : ""}>Events</Link>
                <Link to="/create-hotel" className={isActive("/create-hotel") ? "active" : ""}>Create Hotel</Link>
                <Link to="/admin-hotels" className={isActive("/admin-hotels") ? "active" : ""}>Hotels</Link>
                <Link to="/login" className={isActive("/login") ? "active" : ""}>Login</Link>
                <Link to="/register" className={isActive("/register") ? "active" : ""}>Register</Link>
            </div>

            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </nav>
    );
}

export default Navbar;
