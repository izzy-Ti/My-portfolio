import react from 'react'
import './about.css'
import segment from './../../assets/segment.png'
import profile from '../../assets/profile.jpg'


function About(){
    return(
        <div className='about' id='about'>
            <div className="about_title">
                <h1>About me</h1>
                <img src={segment} alt="" height="110"/>
            </div>
            <div className="about_section">
                <div className="about_left">
                    <img src={profile} alt="" height='300' />
                </div>
                <div className="about_right">
                    <div className="about_para">
                        <p>I'm a full-stack web developer with a strong focus on the MERN stack (MongoDB, Express, React, Node.js). I build fast, responsive, and scalable web applications from dynamic React frontends to secure backend APIs with Node and MongoDB. I enjoy turning ideas into real-world solutions that work seamlessly across devices.</p>
                        <p>I've built admin panels, dashboards, and custom tools with features like authentication, CRUD operations, and responsive design. I care about clean code, clear communication, and delivering exactly what the client needs, on time.</p>
                    </div>
                    <div className="about_skills">
                        <div className="about_skill"><p>JavaScript</p><hr style={{width : "80%"}}/></div>
                        <div className="about_skill"><p>React Js</p><hr style={{width : "65%"}}/></div>
                        <div className="about_skill"><p>Express Js</p><hr style={{width : "70%"}}/></div>
                        <div className="about_skill"><p>Mongo DB</p><hr style={{width : "67%"}}/></div>
                        <div className="about_skill"><p>Node Js</p><hr style={{width : "60%"}}/></div>
                        <div className="about_skill"><p>Django</p><hr style={{width : "40%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about_achivments">
                <div className="about_achivment">
                    <h1>1+</h1>
                    <p>YEAR EXPERIANCE</p>
                </div>
                <hr />
                <div className="about_achivment">
                    <h1>20+</h1>
                    <p>SUCCESSFULL PROJECTS</p>
                </div>
                <hr />
                <div className="about_achivment">
                    <h1>4+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>
        </div>
    );
}
export default About