import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const cureentpath = window.location.pathname;

    function getActiveClass(path) {
        return cureentpath === path ? "active" : "";

    }


    return(
        <div className="nav">
            <sanp className="brand">MY Website</sanp>
            <Link to="/" className={getActiveClass('/')}>Home</Link>
            <Link to="/about" className={getActiveClass('/about')}>About</Link>
            <Link to="/contact" className={getActiveClass('/contact')}>Contact</Link>
        </div>
    )
}