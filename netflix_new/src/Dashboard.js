import React from 'react'
import './Style.css';
import '@/style/dashboard.css';
import movie from './movie.png';
import episode from './episode.png';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
import { Col, Row } from 'antd';

function Dashboard() {
  return (
    <div className='dashboard-main'>
      <div className='popular_content'>
        <div className='d_title'>List of most popular content:</div>
        <div className='d_medias'>
          <img src={movie} alt='Movie' />
          <img src={episode} alt='Eposide' />
          <img src={movie} alt='Movie' />
          <img src={episode} alt='Eposide' />
        </div>
      </div>
      <Row gutter={24}>
        <Col span={12}> 
          <div className='d_title'>Monthly changes in revenue:</div>
          <LineChart />
        </Col>
        <Col span={12}>
          <div className='d_title'>Distribution of subscription types:</div>
          <BarChart />
        </Col>
        <Col span={12}>
          <div className='d_title'>User nationality distribution:</div>
          <PieChart />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard