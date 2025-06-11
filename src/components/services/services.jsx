import react from 'react'
import './services.css'
import segment from './../../assets/segment.png'
function Services(){
    return(
        <div className='services'>
            <div className="services_title">
                <h1>My services</h1>
                <img src={segment} alt="" height="80" />
            </div>
            <div className="service_format">
                <div className="services_container">
                    <h3>01</h3>
                    <h2>Front-end Design</h2>
                    <p>Front-end development focuses on building the visual 
                        and interactive parts of a website or app that users see and....</p>
                    <div className="service_readmore">
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="services_container">
                    <h3>02</h3>
                    <h2>Back-end Dev</h2>
                    <p>Back-end development deals with the server side of a website or app. It handles databases,
                         server logic, and APIs to ensure everything works behind ...</p>
                    <div className="service_readmore">
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="services_container">
                    <h3>03</h3>
                    <h2>Web Maintenance</h2>
                    <p>Web maintenance involves regularly updating and managing a website to ensure it runs 
                        smoothly, stays secure, and remains up to date. Tasks include....</p>
                    <div className="service_readmore">
                        <p>Read more</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
            </div>
            </div>

        </div>
    );
}
export default Services