import { useState } from 'react';
import css from './App.module.css';
import initialContacts from '../data/contacts.json';

import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  function handleChange(evt) {
    setFilter(evt.target.value);
  }

  function getFilteredContacts(contacts, filter) {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChange={handleChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
