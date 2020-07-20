import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SearchProfessional from './pages/SearchProfessional';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={SearchProfessional} path='/' exact/>
    </BrowserRouter>
  );
}

export default Routes;