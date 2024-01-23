import css from './SearchBox.module.css';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.inputWrap}>
      <label className={css.label}>
        <IoIosSearch size="24" />
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="name"
        value={value}
        onChange={onChange}
        placeholder="Please enter a name to search"
      />
    </div>
  );
}
