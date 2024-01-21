import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, List, message, Upload, DatePicker, Space } from 'antd';
import user from '@/user.jpg';
import movie from '@/movie.png';
import '@/style/profile.css';
import { NavLink } from "react-router-dom";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

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

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div className='profileMain'>
      <div>
        <div className='info'>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: '100%',
              }}
            />
            ) : (
              uploadButton
            )}
          </Upload>
          {<Avatar src={user} alt='User' />}
          <div>Name:</div>
          <div>Date of Birth:</div>
          <Space direction="vertical" size={12}>
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
          </Space>
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

export default UserProfile;

