import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux-store/operetions';

import style from './ContactForm.module.css';

function FormNumber() {
  const item = useSelector(state => state.contacts.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const idName = useRef(nanoid()).current;
  const idNumber = useRef(nanoid()).current;
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const formName = e.currentTarget.name.value;
    const formNumber = e.currentTarget.number.value;

    if (item.filter(e => e.name === formName).length !== 0) {
      alert(`${formName}is already in contacts.`);
      return;
    }
    const id = nanoid();
    const numberInfo = {
      id,
      name: formName,
      number: formNumber,
    };
    dispatch(addContact(numberInfo));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm} className={style.container}>
      <label htmlFor={idName} className={style.label__title}>
        Name
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
        className={style.input__form}
      />
      <label htmlFor={idNumber} className={style.label__title}>
        Number{' '}
      </label>
      <input
        id={idNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => {
          setNumber(e.target.value);
        }}
        className={style.input__form}
      />
      <button type="submit" className={style.form__button}>
        Add contatc
      </button>
    </form>
  );
}

export default FormNumber;