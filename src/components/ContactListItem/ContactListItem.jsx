import { Contact, Button, ContactName } from './ContactListItem.styled';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactListItem = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterValue)
  );

  return filteredContacts.map(contact => {
    return (
      <Contact key={contact.id}>
        <AiOutlineUser size={20} />
        <ContactName>
          {contact.name}: {contact.phone}
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
