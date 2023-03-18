import { useSelector, useDispatch } from 'react-redux';
import { selectContactItems, selectFilters } from 'redux/selectors';
import { deleteContactAction } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactItems);
  const filter = useSelector(selectFilters);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

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
