import React from 'react';
import '@/style/user-manage.css';
import '@/style/global.css';
import { Select, Space, Avatar, List, Row, Col } from 'antd';
import { NavLink } from "react-router-dom";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    title: 'the most popular movie 1',
  },
  {
    title: 'the most popular movie 2',
  },
];
const MovieManagement = () => {
  return (
    <div className='w-100 main-container'>
      <Row className='d-flex align-items-center' gutter={10}>
        <Col>
          <div>The list of the most popular episode in:</div>
        </Col>
        <Col>
          <Space wrap>
            <Select
              defaultValue="Netherlands"
              style={{
                width: 130,
              }}
              onChange={handleChange}
              options={[
                {
                  value: 'nl',
                  label: 'Netherlands',
                },
                {
                  value: 'fr',
                  label: 'France',
                },
                {
                  value: 'en',
                  label: 'England',
                },
              ]}
            />
          </Space>
        </Col>
      </Row>
      <List className='movieList'
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={<NavLink to={`/movie-information`}>Movie name</NavLink>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default MovieManagement;
