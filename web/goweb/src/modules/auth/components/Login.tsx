import { PulseLoader } from 'react-spinners';
import { v7 as uuidv7 } from 'uuid';

function Login() {
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    window.location.href = '/';
    return (
      <div
        className="flex justify-center items-center 
       h-screen"
      >
        <PulseLoader color="green" />
      </div>
    );
  }

  function redirectToDex() {
    const client_id = 'gogogo.dev';
    const redirect_uri = 'http://localhost:8999/auth/callback';
    const scope = 'openid profile email groups';
    const responseType = 'id_token';
    const nonce = uuidv7();

    const authUrl = `http://localhost:5556/dex/auth?client_id=${client_id}&response_type=${responseType}&redirect_uri=${redirect_uri}&scope=${scope}&nonce=${nonce}`;

    window.location.href = authUrl;
  }

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
