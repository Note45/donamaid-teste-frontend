import React from 'react';
import { BsPeopleCircle } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { randomProfessionalListCreate } from '../../services/api';

import './styles.css';

const ProfessionalsList = ({ dataProfessionals = []}) => {
  const history = useHistory();

  return (
    <div id='professionalsListContainer'>
      <h2>Outros Profissionais:</h2>
      
      {dataProfessionals.map(professional => (
        <div
          key={professional.name} 
          className='containerProfessional'
          onClick={() => {
            let professionalData = professional;
            let professionalsList = randomProfessionalListCreate();

            console.log(professionalData, professionalsList);
            history.push({
              pathname: '/profile-page',
              state: {professionalData, professionalsList}
            });

            document.location.reload();
          }}
        >
          <h3><BsPeopleCircle className='icon'/>{professional.name}</h3>          
        </div>
      ))}
    </div>
  );
}

export default ProfessionalsList;