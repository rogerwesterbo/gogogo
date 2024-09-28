import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';

function Settings() {
  return (
    <PageContent title="Settings">
      <div>
        <h1>Settings</h1>
      </div>
    </PageContent>
  );
}
export default Settings;
export const SettingsPage = lazy(() => import('./Settings'));
