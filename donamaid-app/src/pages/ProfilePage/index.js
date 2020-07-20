import React from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';

const ProfilePage = () => {
  const professionalData = useLocation().state;

  return(
    <div id='profileContainer'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
      </header>

    </div>
  );
}

export default ProfilePage;