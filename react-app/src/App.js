import React from 'react';
import logo from './logo.svg';
import './assets/styles/global.scss';
import NavBar from './cmps/NavBar';
import Home from './pages/Home';
import Footer from './cmps/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
