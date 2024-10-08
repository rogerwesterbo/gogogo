import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState('en');

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  const languageHandler = (lng: string) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  if (dark) {
    document.body.classList.add('dark');
  }

  const divStyle = {
    top: '1rem',
    left: '0.8rem',
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <Link to="/" className="ml-5">
            <span className="">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-16 v-16">
                <path
                  d="m7.2446208 70.4986572c14.8757553 23.7645187 46.2000237 30.9703751 69.964592 16.0946121 5.546814-3.4721451 10.1785049-7.8482285 13.8510056-12.8072815-.7690887.2297974-1.6332779.3565598-2.6242294.3565598-3.9953613 0-6.6740112-3.3271332-9.2859421-6.2619705-2.4399414-2.7414017-6.4586487-3.4154434-9.6719437-1.6426239v.0000534c-5.0722046 1.5129089-4.8052216 7.904541-11.3938293 7.904541-7.2808037 0-7.5908813-6.9854507-14.3201942-7.5452728l-1.445118-.0169449c-6.9797363.3960648-7.2037239 7.5622177-14.5864048 7.5622177-7.58391 0-7.58391-7.5998383-15.1758585-7.5998383-2.6812658 0-4.4186459.9519653-5.8703523 2.1895142-.4998808-.8567734-.9679012-1.7135544-1.4120998-2.5861664v.8835068c.6118263 1.1703873 1.2578363 2.3307571 1.9703745 3.4690933z"
                  fill="#4388b9"
                />
                <path
                  d="m91.1454391 73.6705093c.2726974-.3705063.5489807-.7385864.8108292-1.1154861-.2659225.3742828-.5336761.7474976-.8108292 1.1154861z"
                  fill="#4388b9"
                />
                <path
                  d="m45.1037674 31.7865162 22.5765381-12.5830765c-4.444912-8.0693931-13.0290451-13.5383987-22.8928414-13.5383987-14.4264488 0-26.1214314 11.6949825-26.1214314 26.1214314 0 14.4264908 11.6949825 26.1214752 26.1214314 26.1214752 9.8637962 0 18.4479294-5.4689636 22.8928413-13.5383987z"
                  fill="#dc594e"
                />
                <circle cx="51.07" cy="16.48" fill="#e6e7e8" r="3.533" />
                <circle cx="51.07" cy="16.48" fill="#344e5c" r="1.953" />
                <circle cx="49.803" cy="15.456" fill="#e6e7e8" r=".929" />
                <path
                  d="m77.4123001 34.0078621c-.5806046 0-1.051033-.4707756-1.051033-1.0510368 0-.5802574.4704285-1.051033 1.051033-1.051033h4.464119c.0005112-.0401592.0060272-.0790329.0060272-.1193199 0-5.283741-4.2833023-9.5670395-9.5670395-9.5670395s-9.5670395 4.2832985-9.5670395 9.5670395 4.2833023 9.5670815 9.5670395 9.5670815c4.5176163 0 8.2942581-3.1351395 9.2972641-7.3456917h-4.2003708z"
                  fill="#d6b24e"
                />
                <circle cx="75.112" cy="28.573" fill="#e6e7e8" r=".961" />
                <g fill="#509fd7">
                  <path d="m95 67.5871582c-1.2217178 2.2926025-2.6258774 4.4900665-4.2124786 6.5843887-.7694778.2300415-1.6341476.3570023-2.6257782.3570023-7.5839081 0-7.5839081-7.5998459-15.1758575-7.5998459-7.5840073 0-7.5840073 7.5998459-15.1758575 7.5998459-7.5839119 0-7.5839119-7.5998459-15.1758575-7.5998459-7.5840073 0-7.5840073 7.5998459-15.1758595 7.5998459-7.58391 0-7.58391-7.5998459-15.1758585-7.5998459-2.6812658 0-4.4186463.951973-5.8703527 2.1895218-.499881-.856781-.9679014-1.713562-1.4121-2.586174 1.8008094-1.7849274 3.6887741-3.4826012 7.266571-3.4826012 7.5919476 0 7.5919476 7.5998421 15.1759548 7.5998421 7.5918522 0 7.5918522-7.5998421 15.1757641-7.5998421 7.5919456 0 7.5919456 7.5998421 15.1837997 7.5998421 7.5839119 0 7.5839119-7.5998421 15.1758537-7.5998421 7.5840073 0 7.5840073 7.5998421 15.1758652 7.5998421 3.3080979 0 5.1723405-1.4358749 6.8461915-3.0621338z" />
                  <path d="m86.2181015 79.4232025c-.9281006.9281464-1.8879623 1.824585-2.8954773 2.6734238-3.3159409-2.1895218-4.8233337-6.1956863-10.3367386-6.1956863-7.5840073 0-7.5840073 7.5919037-15.1758575 7.5919037-7.5839119 0-7.5839119-7.5919037-15.1758575-7.5919037-7.5840073 0-7.5840073 7.5919037-15.1758595 7.5919037-7.58391 0-7.58391-7.5919037-15.1758585-7.5919037-.38871 0-.7535982.0158844-1.1026039.0634766-.8568277-1.0392227-1.6818924-2.1260376-2.4593115-3.2525635.9836855-.4204254 2.133934-.6901627 3.5460339-.6901627 7.5919476 0 7.5919476 7.5918961 15.1759548 7.5918961 7.5918522 0 7.5918522-7.5918961 15.1757641-7.5918961 7.5919456 0 7.5919456 7.5918961 15.1837997 7.5918961 7.5839119 0 7.5839119-7.5918961 15.1758537-7.5918961 6.8779602 0 7.5204849 6.2432708 13.2401581 7.4015121z" />
                  <path d="m80.2762833 84.5003052c-.8170319.6108551-1.6578751 1.189949-2.5147095 1.7294388-1.2375946-.8091888-2.7368469-1.3565674-4.7756882-1.3565674-7.5840073 0-7.5840073 7.5919037-15.1758575 7.5919037-7.5839119 0-7.5839119-7.5919037-15.1758575-7.5919037-5.4895859 0-7.004818 3.9823914-10.3049774 6.1798019-1.8960018-.7139435-3.7602406-1.5468979-5.5610504-2.4909286.222147.015831.4442959.0237732.6743832.0237732 7.5918522 0 7.5918522-7.5919037 15.1757641-7.5919037 7.5919456 0 7.5919456 7.5919037 15.1837997 7.5919037 7.5839119 0 7.5839119-7.5919037 15.1758537-7.5919037 3.6016235 0 5.489685 1.7056198 7.2983398 3.5063858z" />
                </g>
              </svg>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
          <span className="relative w-full">
            <input
              type="search"
              placeholder={t('common.search')}
              className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
            />
            <div className="absolute search-icon" style={divStyle}>
              <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </span>
        </div>

        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="flex-1 md:flex-none md:mr-3">
              {(() => {
                if (lang === 'en') {
                  return (
                    <a onClick={() => languageHandler('no')} className="inline-block py-2 px-4 text-white no-underline">
                      Norsk
                    </a>
                  );
                } else {
                  return (
                    <a onClick={() => languageHandler('en')} className="inline-block py-2 px-4 text-white no-underline">
                      English
                    </a>
                  );
                }
              })()}
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <a onClick={() => darkModeHandler()} className="inline-block py-2 px-4 text-white no-underline">
                {dark && <span>{t('common.light')}</span>}
                {!dark && <span>{t('common.dark')}</span>}
              </a>
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <div className="relative inline-block">
                <button onClick={handleClick} className="drop-button text-white focus:outline-none">
                  <span className="">
                    <i className="em em-robot_face"></i>
                  </span>{' '}
                  <div className="flex">
                    <Avatar />
                    <svg className="h-6 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </button>
                {showMenu && (
                  <div className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30">
                    <Link
                      to={'/profile'}
                      onClick={handleClick}
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-user fa-fw"></i> Profile
                    </Link>
                    <Link
                      to={'/settings'}
                      onClick={handleClick}
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-cog fa-fw"></i> Settings
                    </Link>
                    <div className="border border-gray-800"></div>
                    <Link
                      to={'/logout'}
                      onClick={handleClick}
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw"></i> Log out
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
