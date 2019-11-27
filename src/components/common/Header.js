import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from '../../assets/img/logo.svg';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{zIndex: '200'}} color="dark" dark expand="md">
        <NavbarBrand href="/innomark" className="logo"><img src={logo} alt='logo' style={{ width: '50px' }} /> <span>InnoMark</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* <NavItem>
              <NavLink><Link to='/about'>About Us</Link></NavLink>
            </NavItem> */}
            <NavItem className="border-right">
              <NavLink><Link to='/innomark/login' className="login-button">Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/innomark/register' className="register-button">Sign Up</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
