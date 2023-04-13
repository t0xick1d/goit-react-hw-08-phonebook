import React from 'react';
import { selectIsLoggedIn } from 'redux-store/auth/selectors';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import style from './style.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const AuthMenu = () => {
    return (
      <>
        <NavLink to="/register" className={style.title}>
          Register
        </NavLink>
        <NavLink to="/login" className={style.title}>
          LogIn
        </NavLink>
      </>
    );
  };
  return (
    <header className={style.container}>
      <NavLink to="/" className={style.title}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={style.title}>
          Contacts
        </NavLink>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default Navigation;
