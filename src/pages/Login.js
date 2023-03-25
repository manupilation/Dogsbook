import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import LoginCreate from '../components/LoginCreate/LoginCreate';
import LoginRecover from '../components/LoginRecover/LoginRecover';
import LoginReset from '../components/LoginReset/LoginReset';
import { userContext } from '../UserContext';
import style from "./Login.module.css";
import NotFound from '../components/NotFound/NotFound';

const Login = () => {
  const {login} = useContext(userContext);

  if(login === true) return <Navigate to="/conta" />

  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />}/>
          <Route path='create' element={<LoginCreate />}/>
          <Route path='recover' element={<LoginRecover />}/>
          <Route path='reset' element={<LoginReset />}/>
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </div>
    </section>
  )
}

export default Login;
