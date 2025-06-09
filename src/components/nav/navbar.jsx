import react from 'react'
import './navbar.css'
import logo from './../../assets/logo.png'
function Nav(){
    return(
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Coontact</li>
            </ul>

            <div className="Nav_contact">Contact Me</div>
        </div>
    );
}
export default Nav