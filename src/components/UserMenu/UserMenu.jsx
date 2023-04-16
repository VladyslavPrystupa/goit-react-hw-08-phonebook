import { useDispatch, useSelector } from 'react-redux';
import { authUserLogout } from 'redux/auth/operations';
import { getUserEmail } from 'redux/selectors';
import { Button, UserBox, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  return (
    <UserBox>
      <div>
        Welcome! <UserName> {`${userEmail}`}</UserName>
      </div>
      <Button type="button" onClick={() => dispatch(authUserLogout())}>
        Logout
      </Button>
    </UserBox>
  );
};
