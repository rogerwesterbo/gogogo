import { lazy } from 'react';

function Logout() {
  localStorage.removeItem('token');
  window.location.href = '/';
  return <></>;
}

export default Logout;
export const LogoutPage = lazy(() => import('./Logout'));
