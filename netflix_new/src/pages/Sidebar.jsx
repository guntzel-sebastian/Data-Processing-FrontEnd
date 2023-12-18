// Sidebar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, GlobalOutlined, RobotOutlined, WalletOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import '@/style/sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Dashboard', '/', <HomeOutlined />),
    getItem('User Management', 'user-management', <GlobalOutlined />),
    getItem('Media Management', '', <RobotOutlined />, [
      getItem('Movie', 'movie-management'),
      getItem('Episode', 'episode-management'),
    ]),
    getItem('Subscription Management', 'subscription-management', <WalletOutlined />),
  ];
  
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 250,
        padding: "1rem 0.5rem",
      }}
      theme='dark'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
}

export default Sidebar;
