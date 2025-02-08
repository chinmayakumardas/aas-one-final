import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice'; // Adjust the import path
import Image from 'next/image';

export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    // Simulate a login (replace with actual authentication logic)
    const userData = { name: 'John Doe', email: 'john@example.com' };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Authentication Example</h1>

      {isAuthenticated ? (
        <div className="mt-4">
          <p>Welcome, {user.name}!</p>
          <button
            onClick={handleLogout}
            className="mt-2 p-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}
