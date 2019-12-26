import React, { useState, useContext } from 'react';
import './Header.css'; 
import Context from '../../Context';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import { getName } from '../../utils/getEnv';

const Header = (props) => {

  const ctx = useContext(Context);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log(ctx);
    setIsOpen(!isOpen);
    console.log(ctx);
  }

  
  return (
    
    <div className="mb-4">
      <Navbar bg={ctx.theme} variant={ctx.theme} color={ctx.theme} dark  expand="md">
      
      <NavbarBrand href="/">{getName()}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>            
            </NavItem>
            <NavItem>            
              <NavLink tag={RRNavLink} exact to="/register" activeClassName="active">Register</NavLink>
            </NavItem>
          </Nav>
         
          <Button outline onClick={ctx.toggleTheme}> Change Theme </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;