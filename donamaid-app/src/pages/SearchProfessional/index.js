import React, { useEffect, useState } from 'react';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';
import peopleNames from '../../services/api';

const SearchProfessional = () => {
  const [ professionals, setProfessionals ] = useState([]);

  useEffect(() => {
    setProfessionals(peopleNames);
  }, []);

  async function handleClick() {
    let inputName = document.getElementById('inputName').value;

    if(inputName !== '') {
      console.log('Clicou');
    }
  }

  console.log(professionals);

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