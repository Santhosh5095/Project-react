// src/components/ProfilePage.js

import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

const ProfilePage = (props) => {
  const user = {
    name: props.name,
    email: props.email,
    bio: props.bio,
    profilePictureUrl: props.profilePictureUrl + "./images/santhu.jpg",
  };

  return (
    <div className="profile-page">
      <ProfilePicture imageUrl={user.profilePictureUrl} />
      <ProfileDetails user={user} />
    </div>
  );
};

export default ProfilePage;
