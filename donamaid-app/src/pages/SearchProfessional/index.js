import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';
import peopleNames, { randomProfessionalListCreate } from '../../services/api';

const SearchProfessional = () => {
  const [ professionals, setProfessionals ] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setProfessionals(peopleNames);
  }, []);

  async function handleClick() {
    let inputName = document.getElementById('inputName').value;

    if(inputName !== '' && professionals !== []) {
      let findedProfessional = false; 

      for(const professionalData of professionals) {
        if(inputName === professionalData.name) {
          findedProfessional = true;
          
          let professionalsList = await randomProfessionalListCreate();

          history.push({
            pathname: '/profile-page',
            state: {professionalData, professionalsList}
          });

          break;
        }
      }

      if(findedProfessional === false) {
        alert('Verifique o nome do profissional digitado!');
      }
    }else {
      alert('Verifique o nome do profissional digitado!');
    }
  }

  return (
    <div id='containerSearchProfessional'>
      <header>
        <div className='containerLogoHeader' onClick={() => history.push('/')}><img id='logo' src={logo} alt='Logo Donamaid'/></div>
      </header>

      <div id='searchContainer'>
        <input id='inputName' type='text' placeholder='Digite o nome do profissional...'/>
        <button onClick={handleClick}>PESQUISAR PROFISSIONAL</button>
      </div>
    </div>
  );
}

export default SearchProfessional;