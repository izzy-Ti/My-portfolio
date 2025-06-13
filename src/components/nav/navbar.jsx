import react, {useState , useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css'
import logo from './../../assets/logo.png'
import underline from './../../assets/underline.png'
import menu_open from './../../assets/menu.png'
import menu_close from './../../assets/close.png'
function Nav(){
    const [menu, setmenu] = useState("")
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right = "0"
    }
    const closeMenu = () =>{
        menuRef.current.style.right = "-350px"
    }

    return(
        <div className='navbar'>
            <img src={logo} alt="Is logo" height="80"/>
            <div  className='nav_mob_open' onClick={openMenu}>
                <i class="fa-solid fa-bars"/>
            </div>
            <ul ref={menuRef} className='navbar_menu'>
                <div className="nav_mob_close" onClick={closeMenu}>
                    <i class="fa-solid fa-x"></i>
                </div>
                <li><AnchorLink className="anchor_link" offset={50} href = "#home"><p onClick={() => {setmenu("home")}}>Home</p></AnchorLink>{menu === "home"? <img className='nav_under' src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#about"><p onClick={() => {setmenu("about")}}>About Me</p></AnchorLink>{menu === "about"? <img className='nav_under' src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#service"><p onClick={() => {setmenu("service")}}>Services</p></AnchorLink>{menu === "service"? <img className='nav_under' src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#work"><p onClick={() => {setmenu("work")}}>Protfolio</p></AnchorLink>{menu === "work"? <img className='nav_under' src={underline} height="9"/>:<></>}</li>
                <li><AnchorLink className="anchor_link" offset={50} href = "#contact"><p onClick={() => {setmenu("contact")}}>Contact</p></AnchorLink>{menu === "contact"? <img className='nav_under' src={underline} height="9"/>:<></>}</li>
            </ul>

            <div className="navbar_contact"><AnchorLink className="anchor_link" offset={50} href = "#contact">Connect With Me</AnchorLink></div>
        </div>
    );
}
export default Nav