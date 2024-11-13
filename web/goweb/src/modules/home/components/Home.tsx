import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <PageContent title={t('nav.home')}>
      <span>{t('pages.home.title')}</span>
    </PageContent>
  );
}

export default Home;
export const HomePage = lazy(() => import('./Home'));
