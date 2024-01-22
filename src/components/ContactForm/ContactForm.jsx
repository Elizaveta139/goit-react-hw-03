import css from './ContactForm.module.css';
import { IoMdPersonAdd } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = { id: '', name: '', number: '' };

export default function ContactForm() {
  const NameId = nanoid(5);
  const NumberId = nanoid(5);

  console.log(NameId);
  console.log('NumberId', NumberId);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={NameId}>Name</label>
        <Field className={css.field} type="text" name="name" id={NameId} />

        <label htmlFor={NumberId}>Number</label>
        <Field className={css.field} type="tel" name="number" id={NumberId} />

        <button className={css.btn} type="submit">
          <IoMdPersonAdd />
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
