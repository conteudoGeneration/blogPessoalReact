import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;