import React, { useState, useContext } from 'react';
import {  useSelector,useDispatch } from 'react-redux';
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
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionsAsyncCreator as logoutAction } from '../../store/modules/auth/login.actions';



import { getName } from '../../utils/getEnv';

const Header = (props) => {

  const ctx = useContext(Context);  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  
  const user = useSelector(store => store.auth);

  const logout = () => {
    
    dispatch(logoutAction());      
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
            <NavItem className={user.login.data !== null ?'oculto':'visible'}>
              <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>            
            </NavItem>
            <NavItem className={user.login.data === null ?'oculto':'visible'}>
              <NavLink tag={RRNavLink} exact to="/login" activeClassName="active" onClick={logout}>Cerrar Sesión</NavLink>            
            </NavItem>
            
          </Nav>
         
          <Button outline onClick={ctx.toggleTheme}> Change Theme </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;