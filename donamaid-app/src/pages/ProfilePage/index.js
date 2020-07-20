import React from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';
import profileAvatar from '../../assets/profile-avatar.png';

const ProfilePage = () => {
  const professionalData = useLocation().state;

  return(
    <div id='profilePageContainer'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
      </header>

      <div id='professionalProfile'>
        <img id='avatar' src={profileAvatar} alt='Foto de perfil do candidato'/>

        <div id='professionalInformation'>
          <div id='professionalName'>
            <h1>Nome do Prosissional</h1>
            <legend>Com a Donamaid desde 2018</legend>
          </div>


          <p>Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          </p>
        </div>
      </div>
      
      <div id='containerButtonHire'>
        <button id='hireProfessional'>QUERO CONTRATAR NAME</button>
      </div>
    </div>
  );
}

export default ProfilePage;