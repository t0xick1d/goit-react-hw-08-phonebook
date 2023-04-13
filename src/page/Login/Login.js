import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux-store/auth/operations';
import style from './style.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
          Log In
        </button>
      </form>
    </div>
  );
}
