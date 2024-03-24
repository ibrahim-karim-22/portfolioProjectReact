import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import { NavLink } from 'react-router-dom'
import untitled from '../app/assets/images/untitled.png';
import untitled2 from '../app/assets/images/untitled2.png';
import untitled3 from '../app/assets/images/untitled3.png';
import untitled4 from '../app/assets/images/untitled4.png';
import UserLoginForm from "./Login/UserLogin"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='dark' sticky='top' expand='lg'>
            <NavbarBrand className='ms-0' href='/'>

                <img className="title-img" src={untitled} alt="Untitled" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <h3 className="nav-btn ms-5">Home<FontAwesomeIcon icon={faStar} /></h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/movies'>

                            <h3 className="nav-btn ms-5">Movies<FontAwesomeIcon icon={faStar} /> </h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/livetv'>
                            <h3 className="nav-btn ms-5">TV<FontAwesomeIcon icon={faStar} /></h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/liveglobe'>
                            <h3 className="nav-btn ms-5">Globe<FontAwesomeIcon icon={faStar} /></h3>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
           
            <img className="tv" src={untitled4} alt="Untitled" />
            
            <img className="lamp1" src={untitled3} alt="Untitled" />
            <div className="favrites-icon-main">
            <img className="couch " src={untitled2} alt="Untitled" />
            <p className="favorites-count">3</p>
            </div>
        </Navbar>
    )
}
export default Header;