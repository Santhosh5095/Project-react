// src/App.js

import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A software developer passionate about coding.',
    profilePictureUrl: 'src\images\santhu.jpg', // Replace with actual URL
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Profile Page</h1>
      </header>
      <ProfilePage
        name={userData.name}
        email={userData.email}
        bio={userData.bio}
        profilePictureUrl={userData.profilePictureUrl}
      />
    </div>
  );
}

export default App;

