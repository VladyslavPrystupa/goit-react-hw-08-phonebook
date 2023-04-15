import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { authRefreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../../Pages/Home'));
const ContactsPage = lazy(() => import('../../Pages/Contacts'));
const LoginPage = lazy(() => import('../../Pages/Login'));
const RegisterPage = lazy(() => import('../../Pages/Register'));

// userqq@m.com
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRefreshUser());
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Route>
      </Routes>

      <GlobalStyles />

      {/* <Header>Phonebook</Header>
      <ContactForm />
      {loading ? (
        <Loader />
      ) : (
        <>
          {contacts.length !== 0 ? (
            <>
              <SubHeader>Contacts</SubHeader>
              <Filter />
              <ContactList />
            </>
          ) : (
            <SubHeader>You have not any contacts</SubHeader>
          )}
        </>
      )} */}
    </>
  );
};
