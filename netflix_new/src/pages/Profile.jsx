import React from 'react';
import { Avatar, List } from 'antd';
import user from '@/user.jpg';
import movie from '@/movie.png';
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
          {<Avatar src={user} alt='User' />}
          <div>Name:</div>
          <div>Date of Birth:</div>
          <div>Language:</div>
          <div>Preferences:</div>
          <div>Watch list:</div>
        </div>

        <div className='list'>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={movie} alt='Movie' />}
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
