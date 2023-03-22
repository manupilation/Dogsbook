import React, { useEffect, useState } from 'react';
import UserNavHeader from './UserNavHeader';
import style from "./UserHeader.module.css"
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title,setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch(pathname) {
      case "/conta/postar":
        setTitle("Compartilhar");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [pathname]);

  return (
    <header className={style.header}>
      <h1 className='title'>
        {title}
      </h1>
      <UserNavHeader />
    </header>
  );
};

export default UserHeader;
