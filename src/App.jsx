import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout';
import { refreshUser } from 'redux-store/auth/operations';
import PrivatRoute from './PrivatRoute';
import { RestrictedRoute } from 'RestrictedRoute';

import style from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

const ContactPage = lazy(() => import('./page/ContactPage'));
const LoginPage = lazy(() => import('./page/Login/Login'));
const RegisterPage = lazy(() => import('./page/Register/Register'));
const HomePage = lazy(() => import('./page/Home'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <h2>Refreshing user...</h2>
  ) : (
    <div className={style.App__container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
