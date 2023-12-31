import React from 'react';
import '@/style/episode-management.css';
import '@/style/global.css';
import episode from '@/episode.png';
import { Select, Space, Avatar, List, Row, Col } from 'antd';
import { NavLink } from "react-router-dom";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    title: 'the most popular episode 1',
  },
  {
    title: 'the most popular episode 2',
  },
];
const EpisodeManagement = () => {
  return (
    <div className='episodeManageMain w-100'>
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
      <List className='episodeList'
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={episode} alt='Episode' />}
              title={<NavLink to={`/episode-information`}>Episode name</NavLink>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default EpisodeManagement;

