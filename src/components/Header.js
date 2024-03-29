import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import couch from '../app/assets/images/couch.png';
import lamp from '../app/assets/images/lamp.png';
import lampOff from '../app/assets/images/lampOff.png';
import lightBack from '../app/assets/images/lightBack.jpg';
import darkBack from '../app/assets/images/darkBack.jpg';
import title from '../app/assets/images/title.png';
import UserLoginForm from "./Login/UserLogin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightMode, setLightMode] = useState(false);
    const currentUser = useSelector((state) => state.user.currentUser);
    const favoritesCount = useSelector((state) => state.favorites.faveList.length + state.favorites.faveListTV.length);

    const toggleLightMode = () => {
        setLightMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const body = document.body;
        body.style.backgroundImage = lightMode ? `url(${darkBack})` : `url(${lightBack})`;
    }, [lightMode]);

    return (
        <Navbar dark color={lightMode ? 'dark' : 'warning'} sticky='top' expand='lg'>
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
            <img className="lamp1" src={lightMode ? lampOff : lamp} alt="Light Mode lamp toggle" onClick={toggleLightMode} />
            <div className="favrites-icon-main">
                {currentUser && (
                    <Link to={`/favorites`}>
                        <img className="couch" src={couch} alt="favorites icon" />
                        <p className="favorites-count">{favoritesCount}</p>
                    </Link>
                )}
            </div>
            <UserLoginForm />
        </Navbar>
    )
}

export default Header;
