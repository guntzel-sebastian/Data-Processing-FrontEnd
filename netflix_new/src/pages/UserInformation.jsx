import React, { useState } from 'react';
import { Avatar, List, Button, Modal } from 'antd';
import user from '@/user.jpg';
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
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div className='userInfoMain'>
      <div>
        <div className='userInfo'>
          <div>Email:</div>
          <div>Nationality:</div>
          <>
            <Button type="primary" onClick={() => setModal1Open(true)}>
              Personal detail
            </Button>
            <Modal
              title="Personal detail"
              style={{ top: 20 }}
              open={modal1Open}
              onOk={() => setModal1Open(false)}
              onCancel={() => setModal1Open(false)}
            >
              <p>Address:</p>
              <p>Subscription type:</p>
              <p>Experied date:</p>
              <p>The list of profile:</p>
              <div className='list'>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={user} alt='User' />}
                        title={<NavLink to={`/profile`}>Profile</NavLink>}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Modal>
            <br />
            <Button type="primary" onClick={() => setModal2Open(true)}>
              Charge detail
            </Button>
            <Modal
              title="Charge detail"
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
            >
              <p>Payment history:</p>
              <p>Payment history:</p>
            </Modal>
          </>
        </div>        
      </div>
    </div>
  );
}

export default UserInformation;
