import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from '@/pages/Home';
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}