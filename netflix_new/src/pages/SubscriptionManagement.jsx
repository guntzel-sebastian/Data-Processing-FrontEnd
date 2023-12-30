import React from 'react';
import { Select, Space, Col, Row } from 'antd';
import '@/style/subscription-management.css';
import '@/style/global.css';
import RevenueLineChart from '@/components/RevenueLineChart';
import SubscriptionLineChart from '@/components/SubscriptionLineChart';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SubscriptionManagement = () => {
  return (
    <div className='subscriptionManageMain'>
      <Row className='subscriptionManageNumber'>
        <Col>
          <Row gutter={10}>
            <Col>
              <div className='d-flex align-items-center h-100'>The number of people subscription in:</div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 120,
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
            <div className='d-flex align-items-center h-100'>The revenue in:</div>
            </Col>
            <Col>
            <Space wrap>
              <Select
                defaultValue="15days"
                style={{
                  width: 120,
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

      <Row className='subscriptionManageNumber' gutter={5}>
        <Col span={12}>
          <Row gutter={10} className='d-flex justify-content-center'>
            <Col>
              <div className='d-flex align-items-center h-100'>The revenue changes in: </div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 120,
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
            <RevenueLineChart />
          </Row>
        </Col>

        <Col span={12}>
          <Row gutter={10} className='d-flex justify-content-center'>
            <Col>
              <div className='d-flex align-items-center h-100'>The number of subscription user changes in: </div>
            </Col>
            <Col>
              <Space wrap>
                <Select
                  defaultValue="15days"
                  style={{
                    width: 120,
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
            <SubscriptionLineChart />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SubscriptionManagement;
