import { createBrowserRouter, createRoutesFromElements, redirect, Route } from 'react-router-dom';
import './App.css';

import { AuthLayout } from './modules/auth/components/AuthLayout';
import { ProtectedLayout } from './modules/auth/components/ProtectedLayout';
import { jwtDecode } from 'jwt-decode';

import { HomePage } from './modules/home/components/Home';
import { LoginPage } from './modules/auth/components/Login';
import { LogoutPage } from './modules/auth/components/Logout';
import { CallbackPage } from './modules/callback/components/Callback';
import { UsersPage } from './modules/users/components/Users';
import { NotFoundPage } from './modules/error/components/NotFound';
import { ProfilePage } from './modules/profile/components/Profile';
import { SettingsPage } from './modules/settings/components/Settings';
import { AboutPage } from './modules/about/components/About';
import { BlogsPage } from './modules/blogs/components/Blogs';

import 'primeicons/primeicons.css';

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        resolve(null);
      } else {
        const decodedToken = jwtDecode(token);
        if (!decodedToken.exp || decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem('token');
          redirect('/login');
          resolve(null);
        }

        resolve(decodedToken);
      }
    }, 0),
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} loader={() => ({ userPromise: getUserData() })}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/auth/callback" element={<CallbackPage />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="settings" element={<SettingsPage />} />

        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
