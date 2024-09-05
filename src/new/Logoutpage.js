import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logoutpage = ({ logoutpage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutpage();
    navigate('/loginPage');
  };

  return (
    <div>
      <h1>Logging Out...</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logoutpage;
