import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.inputWrap}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please enter a name to search"
        />
      </label>
    </div>
  );
}
