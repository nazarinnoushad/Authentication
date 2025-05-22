import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import AuthContext from '../context/AuthContext';

const Profile = () => {
  const { auth } = useContext(AuthContext);
  const { user } = auth || {};

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black text-center">
      <Helmet>
        <title>Profile</title>
      </Helmet>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672883552062-19156aa59a14?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Profile Card */}
      <div className="relative z-10 bg-black bg-opacity-60 text-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-lg w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-6">User Profile</h1>

        <div className="space-y-4 text-left">
          <ProfileItem label="Name" value={user?.name} />
          <ProfileItem label="Email" value={user?.email} />
          <ProfileItem label="Phone" value={user?.phone} />
          <ProfileItem label="Address" value={user?.address} />
          <ProfileItem label="Role" value={user?.role} />
        </div>

        <div className="mt-6 text-left text-xs text-gray-300 break-words">
          <p><span className="font-semibold text-gray-400">JWT Token:</span></p>
          <p>{auth?.token}</p>
        </div>
      </div>
    </div>
  );
};

// Reusable Profile Field
const ProfileItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400 uppercase">{label}</p>
    <p className="text-base font-semibold text-white">{value}</p>
  </div>
);

export default Profile;

