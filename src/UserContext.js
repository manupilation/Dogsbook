import React, { createContext, useCallback, useEffect, useState } from 'react';
import { TOKEN_POST_FETCH, TOKEN_VALIDATE_FETCH, USER_GET_FETCH } from './api';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

const UserContext = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate("/login")
  }, [navigate]);

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_FETCH(token);
        try {
          const response = await fetch(url, options);
          if(!response.ok) throw new Error("Token inválido");
          await getUser(token)
        } catch(err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const {url, options} = USER_GET_FETCH(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST_FETCH({username, password});

      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error("Error: Usuário ou senha inválidos");
      const {token} = await tokenRes.json();
  
      window.localStorage.setItem('token', token);
  
      await getUser(token)
      navigate("/conta");
    } catch(err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const values = {
    data,
    error,
    loading,
    login,
    userLogin,
    userLogout,
  }

  return (
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  )
};

export default UserContext;
