import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux-store/auth/selectors';

export default function PrivatRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshing);
  const shoudRedirect = !isLoggedIn && !isRefreshed;

  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
}
