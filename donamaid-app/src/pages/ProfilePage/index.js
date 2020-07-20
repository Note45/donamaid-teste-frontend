import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const professionalData = useLocation().state;

  console.log(professionalData);

  return(
    <h1>Profile Data Page</h1>
  );
}

export default ProfilePage;