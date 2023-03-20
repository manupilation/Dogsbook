import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import UserContext from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter >
        <UserContext>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/login/*" element={ <Login /> }/>
          </Routes>
          <Footer />
        </UserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
