function NotAuthorized() {
  return (
    <div
      className="flex justify-center items-center 
        bg-gray-100 h-screen"
    >
      <div className="bg-green-500 text-white p-6">
        <div className="login-container">
          <h1 className="text-3xl mb-3">Not autorized!</h1>
        </div>
        <div />
      </div>
    </div>
  );
}
export default NotAuthorized;
