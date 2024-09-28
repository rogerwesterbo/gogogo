import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <PageContent title={t('nav.about')}>
      <div>
        <h2>{t('pages.about.title')}</h2>
      </div>
    </PageContent>
  );
}

export default About;
export const AboutPage = lazy(() => import('./About'));
