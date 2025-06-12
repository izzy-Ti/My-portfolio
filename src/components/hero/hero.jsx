import react from 'react'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/profile.jpg'
function Hero(){
    return(
        <div className='hero' id='home'>
            <img className='profile_img' src={profile} alt="My profile" height='300' />
            <h1><span>I'm Israel Ashenafi</span>,full stack developer</h1>
            <p>I'm a full-stack developer who loves building clean, efficient, and user-friendly web applications—from front-end design to back-end logic.</p>

            <div className="hero_action">
                <div className="hero_connect"><AnchorLink className="anchor_link" offset={50} href = "#contact">Connect With Me</AnchorLink></div>
                <div className="hero_resume">Download resume</div>
            </div>
        </div>
    );
}
export default Hero