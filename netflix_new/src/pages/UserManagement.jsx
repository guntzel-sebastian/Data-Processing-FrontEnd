import React from 'react';
import user from '@/user.jpg';
import '@/style/movie-management.css';
import '@/style/global.css';
import { Select, Space, Avatar, List, Row, Col } from 'antd';
import { NavLink } from "react-router-dom";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    title: 'user 1',
  },
  {
    title: 'user 2',
  },
];
const UserManagement = () => {
  return (
    <div className='userManageMain'>
      <Row className='userManageNumber'>
        <Col>
          <Row gutter={10}>
            <Col>
              <div className='h-100 d-flex align-items-center'>The number of registered users in:</div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: '15days',
                      label: '15 days',
                    },
                    {
                      value: '30days',
                      label: '30 days',
                    },
                    {
                      value: '60days',
                      label: '60 days',
                    },
                  ]}
                />
              </Space>
            </Col>
          </Row>
          <Row>
            <div className='number'>8888</div>
          </Row>
        </Col>
        <Col>
          <Row gutter={10}>
            <Col>
              <div className='h-100 d-flex align-items-center'>
                The number of recharged users in:
              </div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: '15days',
                      label: '15 days',
                    },
                    {
                      value: '30days',
                      label: '30 days',
                    },
                    {
                      value: '60days',
                      label: '60 days',
                    },
                  ]}
                />
              </Space>
            </Col>
          </Row>
          <Row>
            <div className='number'>6666</div>
          </Row>
        </Col>
      </Row>

      <Row className='userManageList'>
        <Col>
          <Row gutter={10}>
            <Col>
              <div className='h-100 d-flex align-items-center'>The list of new users in:</div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: '15days',
                      label: '15 days',
                    },
                    {
                      value: '30days',
                      label: '30 days',
                    },
                    {
                      value: '60days',
                      label: '60 days',
                    },
                  ]}
                />
              </Space>
            </Col>
          </Row>
          <Row>
            <div className='list'>
              <List
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={user} alt='User' />}
                      title={<NavLink to={`/user-information`}>User name</NavLink>}
                      description="email"
                    />
                  </List.Item>
                )}
              />
            </div>
          </Row>
        </Col>

        <Col>
          <Row gutter={10}>
            <Col>
              <div className='h-100 d-flex align-items-center'>The list of recharged users in:</div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: '15days',
                      label: '15 days',
                    },
                    {
                      value: '30days',
                      label: '30 days',
                    },
                    {
                      value: '60days',
                      label: '60 days',
                    },
                  ]}
                />
              </Space>
            </Col>
          </Row>
          <Row>
            <div className='list'>
              <List
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={user} alt='User' />}
                      title={<NavLink to={`/user-information`}>User name</NavLink>}
                      description="subscription type"
                    />
                  </List.Item>
                )}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default UserManagement;
