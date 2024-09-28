import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Menu from '../../shared/components/Menu';
import NavBar from '../../shared/components/Navbar';

export const ProtectedLayout = () => {
  const auth = useAuth();
  const outlet = useOutlet();

  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      <NavBar />
      <div className="flex flex-col md:flex-row">
        <Menu />
        {outlet}
      </div>
    </div>
  );
};
