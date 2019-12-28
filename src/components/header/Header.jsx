import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
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
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionCreator } from '../../store/modules/auth/login.actions';

import { getName } from '../../utils/getEnv';

const Header = (props) => {

  const ctx = useContext(Context);

  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    debugger
    dispatch(logoutActionCreator());
    props.history.push('/login')
  }

  const toggle = () => {
    console.log(ctx);
    debugger
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
              <NavLink tag={RRNavLink} exact to="/register" activeClassName="active">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>            
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>      
                  <DropdownItem onClick={logout}>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
         
          <Button outline onClick={ctx.toggleTheme}> Change Theme </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;