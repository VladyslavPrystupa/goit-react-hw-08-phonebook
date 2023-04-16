import {
  Contact,
  Button,
  ContactName,
  SubHeader,
} from './ContactListItem.styled';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { getContacts, selectFilter } from 'redux/selectors';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterValue)
  );

  if (contacts.length === 0) {
    return <SubHeader>You have no contacts!</SubHeader>;
  }

  return filteredContacts.map(contact => {
    return (
      <Contact key={contact.id}>
        <AiOutlineUser size={20} />
        <ContactName>
          {contact.name}: {contact.number}
        </ContactName>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
      </Contact>
    );
  });
};
