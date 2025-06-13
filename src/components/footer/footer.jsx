import react from 'react'
import './footer.css'
import logo from './../../assets/logo.png'

function Footer(){
    const git = 'https://github.com/izzy-Ti'
    const github = () => {
        window.open(git, '_blank');
    };
    const Linkedin = 'https://www.linkedin.com/in/israel-ashenafi-685720361/'
    const Linked = () => {
        window.open(Linkedin, '_blank');
    };
    const telegramLink = 'https://t.me/afro978'
    const telegram = () =>{
        window.open(telegramLink, '_blank')
    }
    const instaLink = 'https://www.instagram.com/izzruuu/'
    const instagram = () =>{
        window.open(instaLink, '_blank')
    }
    return(
        <div className='footer'>
            <div className="footer_top">
                <div className="footer_top_left">
                    <img src={logo} alt="" height='100'/>
                    <p>I'm Israel Ashenafi,Front-end, Back-end & Full-stack web developer
                        with 1 year of experiance
                    </p>
                </div>
                <div className="footer_top_right">
                    <div className="footer_subscribe" onClick={instagram}>Follow me</div>
                </div>
            </div>
            <hr />	
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    <p>&copy; 2025 Israel Ashenafi, All rights</p>
                </div>
                <div className='footer_bottom_right'>
                    <div onClick={github}>
                    <p><i class="fa-brands fa-github"></i></p>
                    </div>
                    <div onClick={Linked}>
                    <p><i class="fa-brands fa-linkedin"></i></p>
                    </div>
                    <div onClick={telegram}>
                    <p><i class="fa-brands fa-telegram"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer