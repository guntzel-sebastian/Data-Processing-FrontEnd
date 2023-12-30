import React from 'react';
import { Avatar, List } from 'antd';
import '@/style/profile.css';
import { NavLink } from "react-router-dom";

const data = [
  {
    title: 'movie 1',
    description:'bob',
  },
  {
    title: 'episode 1',
    description:'bob',
  },
];
const Profile = () => {
  return (
    <div className='profileMain'>
      <div>
        <div className='info'>
          <div>Name:</div>
          <div>Address:</div>
          <div>Date of Birth:</div>
          <div>Nationality:</div>
          <div>Watch list:</div>
        </div>

        <div className='list'>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                  title={<NavLink to={`/movie-information`}>Movie name</NavLink>}
                  description={<NavLink to={`/episode-information`}>Episode name</NavLink>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
