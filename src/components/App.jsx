import { AddContact } from './AddContact/AddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div style={{ marginLeft: 'calc(50% - 150px)' }}>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
