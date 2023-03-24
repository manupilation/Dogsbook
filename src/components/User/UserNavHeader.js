import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { userContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import styles from "./UserHeaderNav.module.css";
import useMedia from '../../hooks/useMedia';

const UserNavHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const {userLogout} = useContext(userContext);

  const {pathname} = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={
            `${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`
          }
           onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav 
        className={`${
          mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "SAIR"}
        </button>
      </nav>
    </>
  )
};

export default UserNavHeader;