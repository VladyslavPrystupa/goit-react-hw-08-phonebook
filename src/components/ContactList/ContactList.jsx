import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/selectors';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <List>
      <ContactListItem />
    </List>
  );
};
