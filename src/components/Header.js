import { useState } from "react";
import { useSelector } from "react-redux";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import couch  from '../app/assets/images/couch.png'
import lamp from '../app/assets/images//lamp.png'
import title from '../app/assets/images/title.png'
import UserLoginForm from "./Login/UserLogin"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const favoritesCount = useSelector((state) => state.favorites.faveList.length + state.favorites.faveListTV.length);
    // console.log(favoritesCount);

    return (
        <Navbar dark color='dark' sticky='top' expand='lg'>
            <NavbarBrand className='ms-0' href='/'>

                <img className="title-img" src={title} alt="Untitled" />
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
           
            
            
            <img className="lamp1" src={lamp} alt="Light Mode lamp toggle" />
            <div className="favrites-icon-main">
                <Link to={`/favorites`}>
            <img className="couch " src={couch} alt="favorites icon" />
            </Link>
            <p className="favorites-count">{favoritesCount}</p>
            </div>
            <UserLoginForm />
        </Navbar>
    )
}
export default Header;