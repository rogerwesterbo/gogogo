import { createBrowserRouter, createRoutesFromElements, defer, Route } from 'react-router-dom';
import './App.css';

// import Login from './modules/auth/components/Login';
// import Callback from './modules/callback/components/Callback';
// import NotFound from './modules/error/components/NotFound';
// import Logout from './modules/auth/components/Logout';

import { AuthLayout } from './modules/auth/components/AuthLayout';
// import Home from './modules/home/components/Home';
// import Profile from './modules/profile/components/Profile';
// import Users from './modules/users/components/Users';
import { ProtectedLayout } from './modules/auth/components/ProtectedLayout';
import { jwtDecode } from 'jwt-decode';
import Settings from './modules/settings/components/Settings';
import { lazy } from 'react';

const Home = lazy(() => import('./modules/home/components/Home'));
const About = lazy(() => import('./modules/about/components/About'));
const Blogs = lazy(() => import('./modules/blogs/components/Blogs'));
const Users = lazy(() => import('./modules/users/components/Users'));
const Profile = lazy(() => import('./modules/profile/components/Profile'));
const Login = lazy(() => import('./modules/auth/components/Login'));
const Callback = lazy(() => import('./modules/callback/components/Callback'));
const NotFound = lazy(() => import('./modules/error/components/NotFound'));
const Logout = lazy(() => import('./modules/auth/components/Logout'));

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
