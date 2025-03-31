import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
