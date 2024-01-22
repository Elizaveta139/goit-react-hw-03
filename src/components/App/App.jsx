import { useState, useEffect } from 'react';
import css from './App.module.css';
import initialContacts from '../data/contacts.json';

import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('saved-contacts'));
  //   console.log(savedContacts.contacts);
  // console.log('setContacts', setContacts);

  // if (savedContacts) {
  //   let initialValue = savedContacts.contacts;
  //   setContacts(initialValue);
  // }

  // if (savedContacts) {
  //   let initialValue = savedContacts.contacts;
  //   return {
  //     id: initialValue.id,
  //     name: initialValue.name,
  //     number: initialValue.number,
  //   };
  // }

  const [filter, setFilter] = useState('');

  function handleChangeFilter(evt) {
    setFilter(evt.target.value);
  }

  function getFilteredContacts(contacts, filter) {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  function deleteContacts(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }

  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem('saved-contacts'));
  //   if (storedContacts) {
  //     setContacts(storedContacts.contacts);
  //   }
  //   console.log(storedContacts.contacts);
  // }, []);

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify({ contacts }));
  }, [contacts]);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContacts} />
    </div>
  );
}
