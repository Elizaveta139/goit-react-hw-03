import css from './Contact.module.css';
import { IoIosContact, IoIosCall, IoIosTrash } from 'react-icons/io';

export default function Contact({ name, number }) {
  return (
    <div className={css.wrap}>
      <div className={css.infoContacts}>
        <p>
          <IoIosContact className={css.icon} size="24" />
          {name}
        </p>
        <p>
          <IoIosCall className={css.icon} size="24" />
          {number}
        </p>
      </div>
      <button type="button" className={css.btn}>
        Delete
        <IoIosTrash className={css.icon} size="24" />
      </button>
    </div>
  );
}
