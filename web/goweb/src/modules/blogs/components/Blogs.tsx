import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blog-service';
import { Blog } from '../../core/components/models/blog';
import Card from '../../shared/components/Card';
import PageContent from '../../shared/components/PageContent';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      if (data) {
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
    <PageContent title="Blogs">
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
    </PageContent>
  );
}

export default Blogs;
