import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const GuestGuard = ({children}) => {
    const { authenticated } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!authenticated) {
        navigate("/login");
      }
    }, [authenticated]);

  return (
    <div>
      {children}
    </div>
  )
}

export default GuestGuard
