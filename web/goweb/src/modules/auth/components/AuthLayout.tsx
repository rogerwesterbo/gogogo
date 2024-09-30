import { Suspense } from 'react';
import { useLoaderData, useOutlet, Await, ScrollRestoration } from 'react-router-dom';

import { AuthProvider } from '../hooks/useAuth';

type LoaderData = {
  userPromise: Promise<object | null>;
};

export const AuthLayout = () => {
  const outlet = useOutlet();

  const { userPromise } = useLoaderData() as LoaderData;

  return (
    <Suspense>
      <Await
        resolve={userPromise}
        errorElement={<div className="bg-red-700 text-white">Something went wrong!</div>}
        children={(user) => <AuthProvider userData={user}>{outlet}</AuthProvider>}
      />
      <ScrollRestoration />
    </Suspense>
  );
};
