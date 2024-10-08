import { jwtDecode } from 'jwt-decode';
import { User } from '../../core/components/models/user';
import PageContent from '../../shared/components/PageContent';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();
  const token = localStorage.getItem('token');
  if (!token) {
    return <>Missing user token</>;
  }
  const decoded = jwtDecode(token);
  if (!decoded) {
    return <>Missing user token</>;
  }

  const user = decoded as User;

  return (
    <PageContent title={t('nav.profile')}>
      <div>
        <h1>Profile</h1>
        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user?.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageContent>
  );
}

export default Profile;
export const ProfilePage = lazy(() => import('./Profile'));
