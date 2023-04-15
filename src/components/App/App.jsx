import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import { GlobalStyles } from '../App/GlobalStyles';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Header, SubHeader } from './App.styled';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyles />
      <Header>Phonebook</Header>
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
      )}
    </Container>
  );
};
