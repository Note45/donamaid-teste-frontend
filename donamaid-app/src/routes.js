import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SearchProfessional from './pages/SearchProfessional';
import ProfilePage from './pages/ProfilePage';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={SearchProfessional} path='/' exact/>
      <Route component={ProfilePage} path='/profile-page' />
    </BrowserRouter>
  );
}

export default Routes;