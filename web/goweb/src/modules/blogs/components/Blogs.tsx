import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blog-service';
import { Blog } from '../../core/components/models/blog';
import Card from '../../shared/components/Card';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      if (data) {
        console.log(data);
        setBlogs(data);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.length === 0 && <div>No blogs yet ...</div>}
      {blogs.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {blogs.map((blog: Blog) => (
            <Card key={blog.id} title={blog?.title} children={blog?.body} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;