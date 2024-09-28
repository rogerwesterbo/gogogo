import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function Callback() {
  const accessToken = useLocation().hash.split('=')[1].split('&')[0];

  const [data, setData] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const decoded = jwtDecode(accessToken);
    if (decoded) {
      setData(decoded);
      localStorage.setItem('token', accessToken);
      setLoading(false);
    }
  }, [accessToken]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (data) {
    return <Navigate to="/" replace />;
  }
}

export default Callback;
