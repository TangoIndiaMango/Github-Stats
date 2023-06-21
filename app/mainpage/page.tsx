
import React from 'react';

import './styles.scss';
import Profile from '../components/profile';
import Repositories from '../components/repositories';
import Collaborations from '../components/collaborations';
import LogoutButton from '../components/Logout';

const MainPage = () => {
  return (
    <div className="main-page">
      <header className="header">
        <h1 className="title">GithubStats ALX</h1>
        <LogoutButton />
      </header>
      <div className="content">
        <Profile />
        <div className="repositories-collaborations">
          <Repositories />
          <Collaborations />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
