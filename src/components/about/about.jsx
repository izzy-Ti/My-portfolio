import react from 'react'
import './about.css'
import segment from './../../assets/segment.png'
import profile from '../../assets/profile.jpg'


function About(){
    return(
        <div className='about'>
            <div className="about_title">
                <h1>About me</h1>
                <img src={segment} alt="" height="60"/>
            </div>
            <div className="about_section">
                <div className="about_left">
                    <img src={profile} alt="" height='300' />
                </div>
                <div className="about_right">
                    <div className="about_para">
                        <p>I'm skilled in HTML, CSS, and JavaScript, which I use to build clean, responsive, and interactive front-end interfaces. I focus on writing semantic HTML, styling with modern CSS techniques, and adding dynamic behavior through JavaScript for smooth user experiences.</p>
                        <p>On the back end, I work with Django to build secure and scalable web applications. I often pair it with React on the front end to create fast, modular UIs. This full-stack approach allows me to deliver complete, efficient web solutions from front to back.</p>
                    </div>
                    <div className="about_skills">
                        <div className="about_skill"><p>HTML & CSS</p><hr style={{width : "70%"}}/></div>
                        <div className="about_skill"><p>JavaScript</p><hr style={{width : "50%"}}/></div>
                        <div className="about_skill"><p>React Js</p><hr style={{width : "50%"}}/></div>
                        <div className="about_skill"><p>Django</p><hr style={{width : "60%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about_achivments">
                <div className="about_achivments">
                    <h1>1+</h1>
                    <p>YEAR EXPERIANCE</p>
                </div>
                <hr />
                <div className="about_achivments">
                    <h1>20+</h1>
                    <p>SUCCESSFULL PROJECTS</p>
                </div>
                <hr />
                <div className="about_achivments">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>
        </div>
    );
}
export default About