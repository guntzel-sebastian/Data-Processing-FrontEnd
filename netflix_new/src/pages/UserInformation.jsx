import React from 'react';
import { Avatar, List } from 'antd';
import '@/style/user-information.css';
import { NavLink } from "react-router-dom";

const data = [
  {
    title: 'user profile 1',
  },
  {
    title: 'user profile 1',
  },
];
const UserInformation = () => {
  return (
    <div className='userInfoMain'>
      <div>
          <div className='userInfo'>
            <div>Email:</div>
            <div>Language:</div>
            <div>Subscription type:</div>
            <div>Experied date:</div>
            <div>Payment method:</div>
            <div>Payment history:</div>
            <div>The list of profile:</div>
          </div>

          <div className='list'>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                      title={<NavLink to={`/profile`}>Profile</NavLink>}
                    />
                  </List.Item>
                )}
              />
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
