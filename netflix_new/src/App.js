import React from 'react';
import './App.css';
import Title from './pages/Title';
import Sidebar from "./pages/Sidebar";
import Dashboard from './Dashboard'
import UserManagement from './pages/UserManagement';
import MovieManagement from './pages/MovieManagement';
import EpisodeManagement from './pages/EpisodeManagement';
import SubscriptionManagement from './pages/SubscriptionManagement';
import UserInformation from './pages/UserInformation';
import Profile from './pages/Profile';
import EpisodeInformation from './pages/EpisodeInformation';
import MovieInformation from './pages/MovieInformation';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log(isAuthenticated);
  // get current route path
  const currentPath = window.location.pathname;
  console.log(currentPath);

  if (!isAuthenticated && currentPath !== "/login") {
    window.location.href = "/login";
    return;
  }

  return (
    <div className='App'>
      <Router>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Title />
          <div className='main-content'>
            {isAuthenticated && <Sidebar />}
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path='/user-management' element={<UserManagement />} />
              <Route path='/movie-management' element={<MovieManagement />} />
              <Route path='/episode-management' element={<EpisodeManagement />} />
              <Route path='/subscription-management' element={<SubscriptionManagement />} />
              <Route path='/user-information' element={<UserInformation />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/movie-information' element={<MovieInformation />} />
              <Route path='/episode-information' element={<EpisodeInformation />} />
            </Routes>
          </div>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
