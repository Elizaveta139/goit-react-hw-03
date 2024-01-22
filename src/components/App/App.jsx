import { useState, useEffect } from 'react';
import css from './App.module.css';
// import { nanoid } from 'nanoid';
import initialContacts from '../data/contacts.json';

import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // function onSubmitForm(values, actions) {
  //   const idContact = nanoid(5);

  //   const contact = {
  //     id: idContact,
  //     name: values.name,
  //     number: values.number,
  //   };
  //   console.log('contact', contact);
  //   actions.resetForm();
  // }

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

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify({ contacts }));
  }, [contacts]);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContacts} />
    </div>
  );
}
