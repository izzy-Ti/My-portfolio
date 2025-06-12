import react from 'react'
import './footer.css'
import logo from './../../assets/logo.png'

function Footer(){
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
                    <div className="footer_email">
                        <i class="fa-solid fa-user"></i>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer_subscribe">Subscribe</div>
                </div>
            </div>
            <hr />	
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    <p>&copy 2025 Israel Ashenafi, All rights</p>
                </div>
                <div className="footer_bottom_right">
                    <p>Privacy policy</p>
                    <p>Term of service</p>
                    <p>Contact Me</p>
                </div>
            </div>
        </div>
    );
}
export default Footer