import { jwtDecode } from 'jwt-decode';
import { User } from '../../core/components/models/user';

function Profile() {
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
  );
}

export default Profile;