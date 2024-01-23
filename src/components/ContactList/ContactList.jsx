import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact key={id} name={name} number={number} onDelete={onDelete} id={id} />
          </li>
        );
      })}
    </ul>
  );
}
