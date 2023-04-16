import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { authRefreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRout } from './RestrictedRout';
import { getIsRefreshing } from 'redux/selectors';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../Pages/Home'));
const ContactsPage = lazy(() => import('../Pages/Contacts'));
const LoginPage = lazy(() => import('../Pages/Login'));
const RegisterPage = lazy(() => import('../Pages/Register'));

// userqq@m.com
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(authRefreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRout
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRout
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/register"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<h1>not found</h1>} />
          </Route>
        </Routes>
      )}

      <GlobalStyles />
    </>
  );
};
