import './ProjectsPage.css';

export default function ProjectsPage() {

    return (
        <div className="projects">
            <h1 className="projects__title t1">Work in Progress</h1>
            <p className="projects__body body--main">www.labkit.ca, a full-stack application for computer
                hardware technicians to scrape computer hardware information, without having to look up the hardware
                specification data. It uses Playwright for web scraping, React and Tailwind front end, JWT
                authentication, NodeJS for backend, Express for routing, and NoSQL database</p>
            <p className="projects__body body--main">InStock is a full-stack application developed in a team of 6 web
                developers in an Agile environment. Using tickets and stories in Jira, following designs in Figma given
                by our web designers, and version control + gitflow via GitHub.</p>
            <p className="projects__body body--main">First place hackathon winning industry project hosted by Telus
                where my team redesigned their online Optik TV channel purchasing web app, to make it more streamlined
                and
                user friendly.</p>
        </div>
    )
}