import "./NavBar.css";
import logo from '../assets/logo/logo.png';
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link className="navbar__logo-link" to="/">
                    <img className="navbar__logo-img" src={logo} alt="Logo"/>
                </Link>
            </div>
            <ul className="navbar__ul h4">
                <li className="navbar__li">
                    <Link className="hover-underline-animation left" to="/">Home</Link>
                </li>
                <li className="navbar__li">
                    <Link className="hover-underline-animation left" to="/about">About</Link>
                </li>
                <li className="navbar__li">
                    <Link className="hover-underline-animation left" to="/projects">Projects</Link>
                </li>
                <li className="navbar__li">
                    <Link className="hover-underline-animation left" to="/services">Services</Link>
                </li>
                <li className="navbar__li">
                    <Link className="hover-underline-animation left" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}