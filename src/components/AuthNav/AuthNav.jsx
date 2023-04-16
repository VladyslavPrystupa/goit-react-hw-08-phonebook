// import { NavLink } from 'react-router-dom';
import { Nav, Navlink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <Navlink to="/register">Sign Up</Navlink>
      <Navlink to="/login">Log In</Navlink>
    </Nav>
  );
};
