import react from 'react'
import './services.css'
import segment from './../../assets/segment.png'
function Services(){
    const forntEnd = 'https://www.w3schools.com/whatis/whatis_frontenddev.asp'
    const backEnd = 'https://www.geeksforgeeks.org/backend-development/'
    const webMain = 'https://melonbranding.com/en/website/understanding-website-maintenance-methods-and-goals/'
    const test = 'https://www.browserstack.com/guide/front-end-testing'
    const front = () => {
        window.open(forntEnd, '_blank');
    };
    const back = () => {
        window.open(backEnd, '_blank');
    };
    const main = () => {
        window.open(webMain, '_blank');
    };
    const testing = () => {
        window.open(test, '_blank');
    };
    return(
        <div className='services' id='service'>
            <div className="services_title">
                <h1>My services</h1>
                <img src={segment} alt="" height="80" />
            </div>
            <div className="service_format">
                <div className="services_container">
                    <h3>01</h3>
                    <h2>Front-end Design</h2>
                    <p>Front-end development focuses on building the visual 
                        and interactive parts of a ....</p>
                    <div className="service_readmore" onClick={front}>
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="services_container">
                    <h3>02</h3>
                    <h2>Back-end Dev</h2>
                    <p>Back-end development deals with the server side of a 
                        website or app. It handles  ...</p>
                    <div className="service_readmore" onClick={back}>
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="services_container">
                    <h3>03</h3>
                    <h2>Web Maintenance</h2>
                    <p>Web maintenance involves regularly updating and managing
                        a website to ensure it runs....</p>
                    <div className="service_readmore" onClick={main}>
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="services_container">
                    <h3>03</h3>
                    <h2>Frontend Testing</h2>
                    <p> is the process of checking that the user interface UI
                         of a website or web application....</p>
                    <div className="service_readmore" onClick={testing}>
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Services