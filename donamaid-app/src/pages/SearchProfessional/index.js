import React from 'react';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';

const SearchProfessional = () => {
  return (
    <div id='containerSearchProfessional'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
      </header>

      <div id='searchContainer'>
        <input type='text' placeholder='Digite o nome do profissional...'/>
        <button>Pesquisar Profissional</button>
      </div>
    </div>
  );
}

export default SearchProfessional;