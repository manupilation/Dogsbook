import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import LoginCreate from '../components/LoginCreate/LoginCreate';
import LoginRecover from '../components/LoginRecover/LoginRecover';
import LoginReset from '../components/LoginReset/LoginReset';

const Login = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<LoginForm />}/>
        <Route path='create' element={<LoginCreate />}/>
        <Route path='recover' element={<LoginRecover />}/>
        <Route path='reset' element={<LoginReset />}/>
      </Routes>
    </div>
  )
}

export default Login