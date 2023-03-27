import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import Photo from './components/PhotoContent/Photo';
import User from './components/User/User';
import UserProfile from './components/User/UserProfile';
import Home from './pages/Home';
import Login from './pages/Login';
import UserContext from './UserContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <UserContext>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={ <Home /> }/>
              <Route path="/login/*" element={ <Login /> }/>
              <Route path="/conta/*" element={ <ProtectedRoute><User /></ProtectedRoute> }/>
              <Route path="/foto/:id" element={ <Photo /> }/>
              <Route path="/perfil/:user" element={ <UserProfile /> }/>
              <Route path="*" element={ <NotFound /> }/>
            </Routes>
          </main>
          <Footer />
        </UserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
