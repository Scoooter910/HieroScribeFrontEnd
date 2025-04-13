import React from 'react';
import Posts from './Posts';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="profile">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="profile-image" />
        <h1>Welcome to HieroScribe ✨</h1>
        <p className="profile-name">User1's Profile</p>
      </div>
      <Posts />
    </div>
  );
}

export default App;

