import PropTypes from 'prop-types';
import css from './AddContact.module.css';

export const AddContact = ({
  handleInputChange,
  handleSubmit,
  name,
  number,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name">Name</label>
        <input
          className={css.input}
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={css.input}
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

AddContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
