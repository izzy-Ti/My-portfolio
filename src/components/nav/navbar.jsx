import react, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css'
import logo from './../../assets/logo.png'
import underline from './../../assets/underline.png'
import menu_open from './../../assets/menu.jpg'
function Nav(){
    const [menu, setmenu] = useState("")
    

    return(
        <div className='navbar'>
            <img src={logo} alt="Is logo" height="80"/>
            <ul className='navbar_menu'>
                <li><AnchorLink className="anchor_link" offset={50} href = "#home"><p onClick={() => {setmenu("home")}}>Home</p></AnchorLink>{menu === "home"? <img src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#about"><p onClick={() => {setmenu("about")}}>About Me</p></AnchorLink>{menu === "about"? <img src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#service"><p onClick={() => {setmenu("service")}}>Services</p></AnchorLink>{menu === "service"? <img src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#work"><p onClick={() => {setmenu("work")}}>Protfolio</p></AnchorLink>{menu === "work"? <img src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#contact"><p onClick={() => {setmenu("contact")}}>Contact</p></AnchorLink>{menu === "contact"? <img src={underline} height="9"/>:<></>}</li>
            </ul>

            <div className="navbar_contact"><AnchorLink className="anchor_link" offset={50} href = "#contact">Connect With Me</AnchorLink></div>
        </div>
    );
}
export default Nav