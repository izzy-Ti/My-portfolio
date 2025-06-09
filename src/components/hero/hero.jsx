import react from 'react'
import './hero.css'
import profile from '../../assets/profile.jpg'
function Hero(){
    return(
        <div className='hero'>
            <img className='profile_img' src={profile} alt="My profile" height='300' />
            <h1><span>I'm Israel Ashenafi </span>,Full-stack developer</h1>
            <p>I'm a full-stack developer who loves building clean, efficient, and user-friendly web applications—from front-end design to back-end logic.</p>

            <div className="hero_action">
                <div className="hero_connect">Connect With Me</div>
                <div className="hero_resume">Download resume</div>
            </div>
        </div>
    );
}
export default Hero