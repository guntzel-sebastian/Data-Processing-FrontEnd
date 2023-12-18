import React from 'react';
import './App.css';
import Title from './Title';
import Sidebar from "./pages/Sidebar";
import Dashboard from './Dashboard'
import UserManagement from './pages/UserManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Router>
      <Title />
      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user-management' element={<UserManagement />} />
          
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
