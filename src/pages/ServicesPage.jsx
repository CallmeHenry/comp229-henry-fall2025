import './ServicesPage.css';
import frontEndImage from '../assets/images/frontend-card-image.png';
import backEndImage from '../assets/images/backend-card-image.png';
import dataCardImage from '../assets/images/data-card-image.png';

export default function ServicesPage() {
    return (
        <div className="services">
            <div className="services__cards">
                <div className="services__card">
                    <img className="services__card-img offset" src={frontEndImage} alt="Image"/>
                    <h1 className="services__card-title h3">
                        Front-End Dev
                    </h1>
                    <p className="services__card-body body--main">
                        Need help building out your design? I know how to follow style guidelines and Figma!
                    </p>
                    <p className="services__card-footnote footnote">
                        React, Tailwind, Sass
                    </p>
                </div>
                <div className="services__card">
                    <img className="services__card-img offset" src={backEndImage} alt="Image"/>
                    <h1 className="services__card-title h3">
                        Back-End Dev
                    </h1>
                    <p className="services__card-body body--main">
                        I can help build your databases, APIs, authentication, and more!
                    </p>
                    <p className="services__card-footnote footnote">
                        NodeJS, TypeScript, Express
                    </p>
                </div>
                <div className="services__card">
                    <img className="services__card-img" src={dataCardImage} alt="Image"/>
                    <h1 className="services__card-title h3">
                        Data Analytics
                    </h1>
                    <p className="services__card-body body--main">
                        With a post-baccaleurate in data analytics, I can build predictive models and perform
                        statistical analytics for your company!
                    </p>
                    <p className="services__card-footnote footnote">
                        Python, R
                    </p>
                </div>
            </div>
        </div>
    )
}