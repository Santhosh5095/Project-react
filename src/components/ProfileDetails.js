// src/components/ProfileDetails.js

import React from 'react';

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default ProfileDetails;