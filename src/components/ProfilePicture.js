// src/components/ProfilePicture.js

import React from 'react';
import img from "./images/santhu.jpg"

const ProfilePicture = ({ imageurl}) => {
  return (
    <div className="profile-picture">
      <img src={"./images/santhu.jpg"} alt="Profile" />
    </div>
  );
};

export default ProfilePicture;