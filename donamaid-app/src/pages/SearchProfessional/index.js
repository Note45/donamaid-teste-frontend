import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';
import peopleNames from '../../services/api';

const SearchProfessional = () => {
  const [ professionals, setProfessionals ] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setProfessionals(peopleNames);
  }, []);

  async function handleClick() {
    let inputName = document.getElementById('inputName').value;

    if(inputName !== '' && professionals !== []) {
      for(const professionalData of professionals) {
        if(inputName === professionalData.name) {
          history.push({
            pathname: '/profile-page',
            state: {professionalData}
          });

          break;
        }
      }
    }else {
      alert('Verifique o nome do profissional digitado!')
    }
  }

  return (
    <div id='containerSearchProfessional'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
      </header>

      <div id='searchContainer'>
        <input id='inputName' type='text' placeholder='Digite o nome do profissional...'/>
        <button onClick={handleClick}>Pesquisar Profissional</button>
      </div>
    </div>
  );
}

export default SearchProfessional;