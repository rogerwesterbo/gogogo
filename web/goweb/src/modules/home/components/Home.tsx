import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';
import { useTranslation } from 'react-i18next';
import React from 'react';

function Home() {
  const { t } = useTranslation();
  const [valid, setValidity] = React.useState<boolean>(false);
  const inputElement = React.useRef<HTMLInputElement>(null);
  const formElement = React.useRef<HTMLFormElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.checkValidity());
    setValidity(e.currentTarget.checkValidity());
  };

  return (
    <PageContent title={t('nav.home')}>
      <span>{t('pages.home.title')}</span>

      <div className="mt-5">
        <form ref={formElement}>
          {/* invalid:text-red-500  */}
          <input
            type="url"
            ref={inputElement}
            placeholder="Some input"
            className={'mt-2 p-4 text-gray-800 text-lg'}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed"
            disabled={!valid}
          >
            Test
          </button>
        </form>
      </div>
    </PageContent>
  );
}

export default Home;
export const HomePage = lazy(() => import('./Home'));
