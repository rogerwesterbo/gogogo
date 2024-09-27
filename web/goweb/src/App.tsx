import { createBrowserRouter, LoaderFunctionArgs, redirect, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './modules/layout/Layout';

import { dexAuthProvider } from './auth/dexAuth';
import Login from './modules/login/components/Login';
import Callback from './modules/callback/components/Callback';
import NotFound from './modules/error/components/NotFound';
import Logout from './modules/logout/components/Logout';
import { jwtDecode } from 'jwt-decode';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      // Our root route always provides the user, if logged in
      return { user: dexAuthProvider.username };
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: Layout,
        loader: protectedLoader,
      },
      // {
      //   path: 'login',
      //   action: loginAction,
      //   loader: loginLoader,
      //   Component: LoginPage,
      // },
      // {
      //   path: 'protected',
      //   loader: protectedLoader,
      //   Component: ProtectedPage,
      // },
    ],
  },
  {
    path: '/login',
    Component: Login,
    loader: loginLoader,
  },
  {
    path: '/logout',
    Component: Logout,
  },
  {
    path: '/auth/callback',
    Component: Callback,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

export default App;

async function loginLoader() {
  const accessToken = localStorage.getItem('token');
  if (!accessToken) {
    return null;
  }
  const decoded = jwtDecode(accessToken);
  if (decoded) {
    dexAuthProvider.isAuthenticated = true;
    const user: User = decoded as User;
    if (user) {
      dexAuthProvider.username = user?.name;
    } else {
      dexAuthProvider.username = 'unknown';
    }
  }

  if (dexAuthProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}

function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!dexAuthProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  return null;
}

interface User {
  name: string;
  email: string;
}
