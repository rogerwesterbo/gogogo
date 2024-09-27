import NavBar from '../home/components/Navbar';
import Menu from '../home/components/Menu';
import { Outlet } from 'react-router-dom';

function Layout() {
  //const outlet = useOutlet();
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
          <div className="m-3">
            {/* <RoutesRules></RoutesRules> */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
