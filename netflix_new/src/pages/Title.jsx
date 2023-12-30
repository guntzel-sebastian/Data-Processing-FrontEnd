import React from 'react'
import '@/Style.css';
import logo from '@/logo.png';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { Button } from 'antd';

function Title() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="Title">
      <img id='logo' src={logo} alt='Logo' />
      <div className='userLog'>
        {isAuthenticated ? <p>Admin</p> : null}
        {isAuthenticated ? <Button onClick={logout}>Logout</Button> : null}
        {/* <Button type="primary">Primary Button</Button> */}
      </div>
    </div>
  )
}
export default Title