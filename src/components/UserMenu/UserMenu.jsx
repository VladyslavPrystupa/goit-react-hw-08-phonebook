import { useDispatch, useSelector } from 'react-redux';
import { authUserLogout } from 'redux/auth/operations';
import { getUserEmail } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  return (
    <div>
      <p>Welcome {`${userEmail}`}</p>
      <button type="button" onClick={() => dispatch(authUserLogout())}>
        Logout
      </button>
    </div>
  );
};
