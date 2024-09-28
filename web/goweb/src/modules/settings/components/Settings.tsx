import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';
import { useTranslation } from 'react-i18next';

function Settings() {
  const { t } = useTranslation();
  return (
    <PageContent title={t('nav.settings')}>
      <div>
        <h1>{t('pages.settings.title')}</h1>
      </div>
    </PageContent>
  );
}
export default Settings;
export const SettingsPage = lazy(() => import('./Settings'));
