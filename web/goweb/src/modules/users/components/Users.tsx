import { useEffect, useState } from 'react';
import { getUsers } from '../services/user-service';
import { Blog } from '../../core/components/models/blog';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      if (data) {
        console.log(data);
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
  );
}

export default Users;
