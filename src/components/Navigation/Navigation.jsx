import { Navlink } from 'components/AuthNav/AuthNav.styled';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/selectors';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Nav>
      <Navlink to="/">Home</Navlink>
      {isLoggedIn && <Navlink to="/contacts">Contacts</Navlink>}
    </Nav>
  );
};
