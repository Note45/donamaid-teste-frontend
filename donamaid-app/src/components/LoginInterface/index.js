import React, { useState } from 'react';
import { BsPeopleCircle, BsLock } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import './styles.css';
import donieLogo from '../../assets/donie.svg';
import donamaidLogo from '../../assets/donamaid-logo.svg';

const LoginInterface = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData({ ...formData, [name]:value});
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { password, email } = formData;
    
    alert(email, password);
  }

  return(
    <div id='loginInterfaceContainer'>
      <div id='LoginInterface'>
        <div id='buttonExit'>
          <IoMdCloseCircleOutline onClick={() => alert('Clicou')}/>
        </div>

        <img id='donieLogo' src={donieLogo} alt='Donie Logo' />
        
        <form onSubmit={handleSubmit}>
        <img id='donamaidLogo' src={donamaidLogo} alt='Donamaid Logo' />

          <div className='inputField'>
            <BsPeopleCircle className='iconInputForm'/>

            <input
              type='email'
              name='email'
              id='email'
              placeholder='seu e-mail'
              onChange={handleInputChange}
            />
          </div>

          <div className='inputField'>
            <BsLock className='iconInputForm'/>
            
            <input
              type='text'
              name='password'
              id='password'
              placeholder='sua senha'
              onChange={handleInputChange}
            />
          </div>

          <button type='submit'>
            entrar
          </button>

          <a href='#'>esqueci minha senha</a>
        </form>

        <p>Ainda não tem cadastro? Faça <a href='#'>aqui</a></p>
      </div>
    </div>
  );
}

export default LoginInterface;