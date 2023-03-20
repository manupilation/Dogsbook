import React, { createContext, useState } from 'react';
import { TOKEN_POST_FETCH, USER_GET_FETCH } from './api';

export const userContext = createContext();

const UserContext = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const {url, options} = USER_GET_FETCH(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const {url, options} = TOKEN_POST_FETCH({username, password});

    const tokenRes = await fetch(url, options);
    const {token} = await tokenRes.json();

    window.localStorage.setItem('token', token);

    getUser(token)
  }

  const values = {
    data,
    userLogin,
  }

  return (
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  )
};

export default UserContext;
