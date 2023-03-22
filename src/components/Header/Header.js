import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from "./Header.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { userContext } from '../../UserContext';

const Header = () => {
  const {data} = useContext(userContext);

  return (
    <div className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link 
            className={style.login} to="/conta">
            {data.nome}
          </Link>
          ) : (
          <Link 
            className={style.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  )
};

export default Header;
