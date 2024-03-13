import { useState } from "react";
import { Navbar,
         NavbarBrand,
         Collapse,
         NavbarToggler,
         Nav,
         NavItem
    } from "reactstrap";
import { NavLink } from 'react-router-dom'
import  untitled from '../app/assets/images/untitled.png';
import untitled2 from '../app/assets/images/untitled2.png';
import untitled3 from '../app/assets/images/untitled3.png';
import untitled4 from '../app/assets/images/untitled4.png';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='warning' sticky='top' expand='lg'>
            <NavbarBrand className='ms-0' href='/'>
    
            <img className="titleImg" src={untitled} alt="Untitled" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                           <h3 className="homeNavBtn ms-5">Home</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/movies'>
                        <h3 className="homeNavBtn ms-5">Movies</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/livetv'>
                        <h3 className="homeNavBtn ms-5">TV</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/liveglobe'>
                        <h3 className="homeNavBtn ms-5">Globe</h3>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <img className="tv" src={untitled4} alt="Untitled" />
            <img className="lamp1" src={untitled3} alt="Untitled" />
            <img className="couch " src={untitled2} alt="Untitled" />
        </Navbar>
    )
}
export default Header;