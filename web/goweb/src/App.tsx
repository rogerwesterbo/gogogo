import { createBrowserRouter, createRoutesFromElements, defer, Route } from 'react-router-dom';
import './App.css';

import Login from './modules/auth/components/Login';
import Callback from './modules/callback/components/Callback';
import NotFound from './modules/error/components/NotFound';
import Logout from './modules/auth/components/Logout';

import { AuthLayout } from './modules/auth/components/AuthLayout';
import Home from './modules/home/components/Home';
import Profile from './modules/profile/components/Profile';
import Users from './modules/users/components/Users';
import About from './modules/about/components/About';
import { ProtectedLayout } from './modules/auth/components/ProtectedLayout';
import { jwtDecode } from 'jwt-decode';
import Blogs from './modules/blogs/components/Blogs';
import Settings from './modules/settings/components/Settings';

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        resolve(null);
      } else {
        const decodedToken = jwtDecode(token);

        resolve(decodedToken);
      }
    }, 0),
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} loader={() => defer({ userPromise: getUserData() })}>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/auth/callback" element={<Callback />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />

        <Route path="settings" element={<Settings />} />

        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
