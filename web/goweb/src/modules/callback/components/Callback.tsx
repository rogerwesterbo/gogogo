import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function Callback() {
  // Extracting the 'code' parameter from the URL query string (used for authorization)
  //const urlParams = new URLSearchParams(window.location.search);
  //const accessToken = urlParams.get('access_token');
  const accessToken = useLocation().hash.split('=')[1].split('&')[0];

  //   const href = window.location.href; // Returns full path, with domain name
  //   const origin = window.location.origin; // returns window domain url Ex : "https://stackoverflow.com"
  //   const pathname = window.location.pathname; // returns relative path, without domain name
  //   const hash = window.location.hash; // returns the anchor part of a URL

  //   console.log('accessToken', accessToken);
  //   console.log('href', href);
  //   console.log('origin', origin);
  //   console.log('pathname', pathname);
  //   console.log('hash', hash);

  // State to store the retrieved user data
  const [data, setData] = useState<object | null>(null);
  // State to indicate if data is being fetched
  const [loading, setLoading] = useState(false);

  // Runs whenever the 'code' variable changes (likely on authorization flow)
  useEffect(() => {
    setLoading(true);
    //const accessToken = localStorage.getItem('token');
    // if (token) {
    //   setLoading(true); // Set loading to true while fetching data
    //   fetch('http://localhost:5556/dex/userinfo', {
    //     headers: { Authorization: token },
    //   })
    //     .then((res) => res.json()) // Parse the response as JSON
    //     .then((data) => {
    //       setData(data); // Update state with fetched user data
    //       setLoading(false); // Set loading to false when done fetching
    //     });
    // } else if (accessToken) {
    //   // If no token but 'code' is available (GitHub OAuth flow)
    //   setLoading(true); // Set loading to true while fetching data
    //   //   const state = uuidv7();
    //   //   fetch(`http://localhost:5556/oauth/redirect?code=${accessToken}&state=${state}`)
    //   //     .then((res) => res.json()) // Parse the response as JSON
    //   //     .then((data) => {
    //   //       setData(data.userData); // Update state with user data from response
    //   //       localStorage.setItem('token', `${data.tokenType} ${data.token}`); // Store access token in local storage
    //   //       setLoading(false); // Set loading to false when done fetching
    //   //     });

    const decoded = jwtDecode(accessToken);
    if (decoded) {
      setData(decoded);
      console.log('decoded jwt', decoded);
      localStorage.setItem('token', accessToken);
      setLoading(false);
    }
    //}
  }, [accessToken]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (data) {
    return <Navigate to="/" replace />;
  }
}

export default Callback;
