import './HomePage.css';
import {Link} from "react-router-dom";

export default function HomePage() {

    return (
        <div className="home">
            <div className="home__hero">
                <p className="home__hero-eyebrow eyebrow">Software Engineer</p>
                <h1 className="home__hero-name t1">Henry Nguyen</h1>
                <div className="home__hero-button-container">
                    <Link to="/contact">
                        <button className="home__hero-contact-button h4">contact me</button>
                    </Link>
                    <Link to="/projects">
                        <button className="home__hero-projects-button h4">projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}