import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Menu() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left mt-5">
          <li className="mr-3 flex-1">
            <Link
              to="/"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white hover:border-b-2 hover:border-pink-500"
            >
              <i className="fas fa-tasks pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">{t('nav.home')}</span>
            </Link>
          </li>
          <li className="mr-3 flex-1">
            <Link
              to="/blogs"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white hover:border-b-2  hover:border-purple-500"
            >
              <i className="fa fa-envelope pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">{t('nav.blogs')}</span>
            </Link>
          </li>
          <li className="mr-3 flex-1">
            <Link
              to="/about"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white hover:border-b-2 hover:border-purple-500"
            >
              <i className="fa fa-envelope pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">{t('nav.about')}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
