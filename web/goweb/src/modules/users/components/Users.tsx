import { useEffect, useState } from 'react';
import { getUsers } from '../services/user-service';
import { Blog } from '../../core/components/models/blog';
import PageContent from '../../shared/components/PageContent';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      if (data) {
        setUsers(data);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContent title="Users">
      <div>
        <h2>Users</h2>
        {users.length === 0 && <div>No users found</div>}
        {users.length > 0 && (
          <ul>
            {users.map((blog: Blog) => (
              <li key={blog.id}>
                {blog.title} - {blog.body}
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageContent>
  );
}

export default Users;
