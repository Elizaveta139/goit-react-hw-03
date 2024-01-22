import css from './ContactForm.module.css';
import { IoMdPersonAdd } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.number().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const initialValues = { id: '', name: '', number: '' };

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  function handleSubmit(values, actions) {
    const idContact = nanoid(5);

    const contact = {
      id: idContact,
      name: values.name,
      number: values.number,
    };
    console.log('contact', contact);
    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <div className={css.div}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" as="span" />
        </div>

        <div className={css.div}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.field} type="tel" name="number" id={numberFieldId} />
          <ErrorMessage name="number" as="span" className={css.error} />
        </div>

        <button className={css.btn} type="submit">
          <IoMdPersonAdd />
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
