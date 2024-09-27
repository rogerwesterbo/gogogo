// import { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
import { v7 as uuidv7 } from 'uuid';

function Login() {
  // // Extracting the 'code' parameter from the URL query string (used for authorization)
  // const urlParams = new URLSearchParams(window.location.search);
  // const code = urlParams.get('code');

  // // State to store the retrieved user data
  // const [data, setData] = useState<object | null>(null);
  // // State to indicate if data is being fetched
  // const [loading, setLoading] = useState(false);

  // // Runs whenever the 'code' variable changes (likely on authorization flow)
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setLoading(true); // Set loading to true while fetching data
  //     // fetch('http://localhost:5556/dex/userinfo', {
  //     //   headers: { Authorization: token },
  //     // })
  //     //   .then((res) => res.json()) // Parse the response as JSON
  //     //   .then((data) => {
  //     //     setData(data); // Update state with fetched user data
  //     //     setLoading(false); // Set loading to false when done fetching
  //     //   });
  //     setData({ username: 'test' });
  //   }
  //   // else if (code) {
  //   //   // If no token but 'code' is available (GitHub OAuth flow)
  //   //   setLoading(true); // Set loading to true while fetching data
  //   //   const state = uuidv7();
  //   //   fetch(`http://localhost:5556/oauth/redirect?code=${code}&state=${state}`)
  //   //     .then((res) => res.json()) // Parse the response as JSON
  //   //     .then((data) => {
  //   //       setData(data.userData); // Update state with user data from response
  //   //       localStorage.setItem('token', `${data.tokenType} ${data.token}`); // Store access token in local storage
  //   //       setLoading(false); // Set loading to false when done fetching
  //   //     });
  //   // }
  // }, [code]);

  // Function to redirect the user to the GitHub OAuth authorization page
  function redirectToDex() {
    const client_id = 'gogogo.dev';
    const redirect_uri = 'http://localhost:8999/auth/callback';
    const scope = 'openid profile email groups';
    const responseType = 'id_token';
    const nonce = uuidv7();

    const authUrl = `http://localhost:5556/dex/auth?client_id=${client_id}&response_type=${responseType}&redirect_uri=${redirect_uri}&scope=${scope}&nonce=${nonce}`; //`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;

    window.location.href = authUrl;
  }

  // Conditionally render content based on loading state and data availability
  // if (loading) {
  //   return <h4>Loading...</h4>;
  // }

  // if (data) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <div
      className="flex justify-center items-center 
        bg-gray-100 h-screen"
    >
      <div className="bg-green-500 text-white p-6">
        <div className="login-container">
          <h1 className="text-3xl mb-3">Login to MyApp</h1>
          <button
            className="focus:ring-primary p-3 dark:focus:ring-offset-dark rounded-md bg-green-700 text-lg text-white hover:bg-green-900 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-offset-white"
            onClick={redirectToDex}
          >
            Login with DexIDP
          </button>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Login;
