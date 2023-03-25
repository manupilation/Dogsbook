import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { userContext } from '../../UserContext';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';
import NotFound from '../NotFound/NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const {data} = useContext(userContext);

  return (
    <section className='container'>
      <Head title="Minha conta" description="Acesse seus dados e suas fotos favoritas."/>

      <UserHeader />
      <Routes >
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='/postar' element={<UserPhotoPost />}/>
        <Route path='/estatisticas' element={<UserStats />}/>
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </section>
  );
};

export default User;
