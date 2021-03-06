import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

import './styles.css';
import LoginInterface from '../../components/LoginInterface';
import ProfessionalsList from '../../components/ProfessionalsList';
import logo from '../../assets/donamaid-branco-logo.png';
import profileAvatar from '../../assets/profile-avatar.png';

const ProfilePage = () => {
  const [ data, setData ] = useState({
    ...useLocation().state,
    showLoginInterface: false,
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

  function handleClickHire() {
    let textButtonHire = document.getElementById('hireProfessional').textContent;
    
    if(`QUERO CONTRATAR ${data.professionalData.name.toUpperCase()}` === textButtonHire) {
      setData({ ...data, showLoginInterface: true })
    }else {
      history.push('/');
    }
  }

  return(
    <div id='profilePageContainer'>
      <header>
        <div className='containerLogoHeader' onClick={() => history.push('/')}><img id='logo' src={logo} alt='Logo Donamaid'/></div>
        
        <button id='searchProfessioanlButton' onClick={() => history.push('/')}>
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

        <ProfessionalsList dataProfessionals={data.professionalsList}/>
      </div>
      
      <div id='containerButtonHire'>
        <button 
          id='hireProfessional'
          onClick={handleClickHire}
        >
          {`QUERO CONTRATAR ${data.professionalData.name.toUpperCase()}`}
        </button>
      </div>

      {data.showLoginInterface &&
        <LoginInterface data={data} />
      }
    </div>
  );
}

export default ProfilePage;