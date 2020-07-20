import React from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';
import profileAvatar from '../../assets/profile-avatar.png';

const ProfilePage = () => {
  const data = useLocation().state;

  return(
    <div id='profilePageContainer'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
      </header>

      <div id='professionalProfile'>
        <img id='avatar' src={profileAvatar} alt='Foto de perfil do candidato'/>

        <div id='professionalInformation'>
          <div id='professionalName'>
            <h1>{data.professionalData.name.toUpperCase()}</h1>
            <legend>{`Com a Donamaid desde ${data.professionalData.created.split('-')[0]}`}</legend>
          </div>

          <p>Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          </p>
        </div>
      </div>
      
      <div id='containerButtonHire'>
        <button id='hireProfessional'>{`QUERO CONTRATAR ${data.professionalData.name.toUpperCase()}`}</button>
      </div>
    </div>
  );
}

export default ProfilePage;