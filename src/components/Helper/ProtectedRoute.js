import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { userContext } from '../../UserContext';

const ProtectedRoute = ({children}) => {
  const { login } = useContext(userContext);
  return login 
  ? <>{children}</>
  : <Navigate to="/login"/>
}

export default ProtectedRoute