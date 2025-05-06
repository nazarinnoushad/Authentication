import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
  
  const {auth} = useContext(AuthContext)
  console.log(auth);
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 bg-black">
   
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-white">
      <pre className="text-white bg-black p-4 rounded-m">
        {JSON.stringify(auth, null, 4)}
        </pre>
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          <span className="text-pink-400">Authentication</span>
        </h1>
       
        <p className="text-lg max-w-2xl mb-6 font-medium tracking-wide leading-relaxed text-gray-200">
        A full-stack authentication system built with React, Node.js, Express, and MongoDB. Features include user registration, JWT-based login, secure API access, role-based protected routes, and logout functionality.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;




