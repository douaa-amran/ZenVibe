import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/Authentication/LogIn';
import SignUp from './components/Authentication/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
