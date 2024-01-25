import { useState, useEffect } from 'react';
import css from './App.module.css';
// import initialContacts from '../data/contacts.json';

import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

let initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  // const [contacts, setContacts] = useState(initialContacts);
  const [contacts, setContacts] = useState(() => {
    const contactsEl = JSON.parse(localStorage.getItem('saved-contacts'));

    if (contactsEl) {
      const parsedContacts = contactsEl.contacts;
      return (initialContacts = parsedContacts);
    }
    return initialContacts;
  });

  const [filter, setFilter] = useState('');

  function handleChangeFilter(evt) {
    setFilter(evt.target.value);
  }

  function getFilteredContacts(contacts, filter) {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  // function deleteContacts(contactId) {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // }

  function deleteContacts(contactId) {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  }

  // function addContact(newContact) {
  //   setContacts([...contacts, newContact]);
  // }

  function addContact(newContact) {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  }

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify({ contacts }));
  }, [contacts]);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      {/* <h2 className={css.title}>Contacts</h2> */}
      <SearchBox value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContacts} />
    </div>
  );
}
