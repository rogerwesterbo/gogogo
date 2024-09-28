function NotAuthorized() {
  return (
    // <div>
    //   <h1>Not Authorized</h1>
    //   <p>You are not authorized to view this page. Please contact your administrator.</p>
    // </div>
    <div
      className="flex justify-center items-center 
        bg-gray-100 h-screen"
    >
      <div className="bg-green-500 text-white p-6">
        <div className="login-container">
          <h1 className="text-3xl mb-3">Not autorized!</h1>
          {/* <button
            className="focus:ring-primary p-3 dark:focus:ring-offset-dark rounded-md bg-green-700 text-lg text-white hover:bg-green-900 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-offset-white"
            onClick={redirectToDex}
          >
            Login with DexIDP
          </button> */}
        </div>
        <div />
      </div>
    </div>
  );
}
export default NotAuthorized;
