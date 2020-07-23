import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const ReloadPage = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    setData(useLocation);
  }, [data]);

  const history = useHistory();

  if(data.state !== undefined) {
    let { professionalData, professionalsList } = data.state;

    history.push({
      pathname: '/profile-page',
      state: {professionalData, professionalsList}
    });
  }
  return <div></div>
}

export default ReloadPage;