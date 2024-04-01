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


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightMode, setLightMode] = useState(false);
    const currentUser = useSelector((state) => state.user.currentUser);
    const favoritesCount = useSelector((state) => state.favorites.faveList.length + state.favorites.faveListTV.length + state.favorites.faveListGlobe.length);


    const toggleLightMode = () => {
        setLightMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const body = document.body;
        body.style.backgroundImage = lightMode ? `url(${darkBack})` : `url(${lightBack})`;
    }, [lightMode]);

    return (
        <Navbar dark color={lightMode ? 'dark' : 'warning'} sticky='top' expand='xxl'>
            <NavbarBrand href='/'>
                <img className="title-img" src={title} alt="Untitled" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <UserLoginForm />
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/' onClick={() => setMenuOpen(!menuOpen)}>
                            <h3 className="nav-btn">Home</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/movies'  onClick={() => setMenuOpen(!menuOpen)}>
                            <h3 className="nav-btn">Movies</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/livetv'  onClick={() => setMenuOpen(!menuOpen)}>
                            <h3 className="nav-btn">TV</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/liveglobe'  onClick={() => setMenuOpen(!menuOpen)}>
                            <h3 className="nav-btn">Globe</h3>
                        </NavLink>
                    </NavItem>
                    {currentUser && (
                    <NavItem>
                        <NavLink className='nav-link' to='/favorites'  onClick={() => setMenuOpen(!menuOpen)}>
                            <h3 className="nav-btn-fave nav-btn">Favorites {favoritesCount}</h3>

                        </NavLink>
                    </NavItem>
                    )}
                    <NavItem  onClick={() => setMenuOpen(!menuOpen)}>
                            <h3 className="nav-btn-fave nav-btn" onClick={toggleLightMode} >Light</h3>
                    </NavItem>
                </Nav>
            </Collapse>
          
                <img className="lamp1" src={lightMode ? lampOff : lamp} alt="Light Mode lamp toggle" onClick={toggleLightMode} />
            <div className="favrites-icon-main">
                {currentUser && (
                    <Link to={`/favorites`}>
                        <img className="couch" src={couch} alt="favorites icon" />
                        <div className="favorites-count">{favoritesCount}</div>
                    </Link>
                )}
            </div>
           
        </Navbar>
    )
}

export default Header;
