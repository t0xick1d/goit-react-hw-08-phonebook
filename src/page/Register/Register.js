import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux-store/auth/operations';
import style from './style.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={style.Login__title}>
          Username
          <input type="text" name="name" className={style.input__form} />
        </label>
        <label className={style.Login__title}>
          Email
          <input type="email" name="email" className={style.input__form} />
        </label>
        <label className={style.Login__title}>
          Password
          <input
            type="password"
            name="password"
            className={style.input__form}
          />
        </label>
        <button type="submit" className={style.form__button}>
          Register
        </button>
      </form>
    </div>
  );
}
