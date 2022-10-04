import ContactForm from 'Component/ContactForm';
import ContactList from 'Component/ContactList';
import Filter from 'Component/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, delContact } from 'redux/contactSlise';
import { filterContacts } from 'redux/filterSlise';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();


  const createContact = contact => {
    dispatch(addContact(contact));
  };

  const filterInput = e => {
    const input = e.target.value;
   dispatch(filterContacts(input.trim())) ;
  };

  const getFilteredContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter) ||
          number.toLowerCase().includes(filter)
      );
    }
  };

   const deleteContact = (marcer) => dispatch(delContact(marcer))

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '1200px',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook </h1>
      <ContactForm checkContacts={contacts} addContact={createContact} />
      <h2>Contacts</h2>
      <Filter filterInput={filterInput} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
export default App;
