import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black text-center">
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-white max-w-2xl w-full">
        <pre className="bg-black bg-opacity-50 p-4 rounded-md text-sm w-full overflow-x-auto mb-4">
          {JSON.stringify(auth, null, 2)}
        </pre>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          <span className="text-pink-400">Authentication</span>
        </h1>

        <p className="text-base sm:text-lg font-medium tracking-wide leading-relaxed text-gray-200 mb-6 px-2">
          A full-stack authentication system built with React, Node.js, Express, and MongoDB. Features include user registration, JWT-based login, secure API access, role-based protected routes, and logout functionality.
        </p>

        <Link
          to="/signup"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-500 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;





