import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';
import profileAvatar from '../../assets/profile-avatar.png';

const ProfilePage = () => {
  const [ data, setData ] = useState({
    ...useLocation().state,
    homeworldDetails: {}
  });

  const history = useHistory();

  useEffect(() => {
    async function getHomeWorldName() {
      const nameLocation = await axios.get(data.professionalData.homeworld).then(function(response) {
        return response.data;
      });

      setData({
        ...data, 
        homeworldDetails: nameLocation
      });
    }

    getHomeWorldName();
  }, []); 
   
  return(
    <div id='profilePageContainer'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
        
        <button id='searchProfessioanlButton' onClick={() => history.push('/')}>
          <p>PESQUISAR OUTRO PROFISSIONAL</p>
          <FaSearch id='icon' />    
        </button>
      </header>

      <div id='professionalProfile'>
        <img id='avatar' src={profileAvatar} alt='Foto de perfil do candidato'/>

        <div id='professionalInformation'>
          <div id='professionalName'>
            <h1>{data.professionalData.name.toUpperCase()}</h1>
            <legend>{`Com a Donamaid desde ${data.professionalData.created.split('-')[0]}`}</legend>
          </div>

          <div id='descriptionContainer'>
            <h2>{`Região de Atuação: ${data.homeworldDetails.name}`}</h2>
            <h2>{`Serviços realizados: ${data.professionalData.mass}`}</h2>
            <h2>{`Ultimo Serviço: ${data.professionalData.edited.split('-')[1]}/${data.professionalData.edited.split('-')[0]}`}</h2>
          </div>
        </div>
      </div>
      
      <div id='containerButtonHire'>
        <button id='hireProfessional'>{`QUERO CONTRATAR ${data.professionalData.name.toUpperCase()}`}</button>
      </div>
    </div>
  );
}

export default ProfilePage;