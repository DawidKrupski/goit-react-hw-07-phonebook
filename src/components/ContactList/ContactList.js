import { useSelector } from 'react-redux';
import { selectContactItems, selectFilters } from 'redux/selectors';
export const ContactList = ({ handleDelete }) => {
  const contacts = useSelector(selectContactItems);
  const filter = useSelector(selectFilters);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
