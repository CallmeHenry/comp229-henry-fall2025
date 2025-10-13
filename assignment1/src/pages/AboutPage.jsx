import './AboutPage.css';
import picture from '../assets/resume/Head picture.png';
import resume from '../assets/resume/Henry-Nguyen_Resume_Junior-Dev.pdf';

export default function AboutPage() {
    return (
        <div className="about">
            <div className="about__left-container">
                <h1 className="h1">A little bit about me</h1>
                <p className="body--xlarge">Hey there! My name is <b>Henry Nguyen</b>, an enthusiastic IT professional
                    with 2
                    years of experience, my
                    fascination
                    with programming languages and problem
                    solving drives my transition into software development. My passion lies in creating elegant
                    solutions to
                    complex
                    problems and desire to build impactful applications. </p>
                <button className="about__resume-button"><a href={resume}>Download my resume!</a></button>
            </div>
            <div className="about__right-container">
                <img className="about__portrait" src={picture} alt="Portrait"/>
            </div>
        </div>
    )
}