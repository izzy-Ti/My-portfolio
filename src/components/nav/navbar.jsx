import react from 'react'
import './navbar.css'
import logo from './../../assets/logo.png'
function Nav(){
    return(
        <div className='navbar'>
            <img src={logo} alt="Is logo" height="80"/>
            <ul className='navbar_menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <div className="navbar_contact">Connect With Me</div>
        </div>
    );
}
export default Nav