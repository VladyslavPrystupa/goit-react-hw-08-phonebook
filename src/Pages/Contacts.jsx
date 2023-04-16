import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <Filter />
      <ContactList />
    </>
  );
}
