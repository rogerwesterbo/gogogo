import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Menu from '../../home/components/Menu';
import NavBar from '../../home/components/Navbar';

export const ProtectedLayout = () => {
  const auth = useAuth();
  const outlet = useOutlet();

  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      <NavBar></NavBar>

      <div className="flex flex-col md:flex-row">
        <Menu></Menu>

        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5 dark:bg-gray-700">
          <div className="bg-gray-800 pt-3">
            {/* <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                <h3 className="font-bold pl-2">test</h3>
              </div> */}
          </div>
          <div className="m-3">{outlet}</div>
        </div>
      </div>
    </div>
  );
};
