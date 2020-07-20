import React from 'react';

import './styles.css';
import logo from '../../assets/donamaid-branco-logo.png';

const SearchProfessional = () => {
  return (
    <div id='containerSearchProfessional'>
      <header>
        <img id='logo' src={logo} alt='Logo Donamaid'/>
      </header>
    </div>
  );
}

export default SearchProfessional;