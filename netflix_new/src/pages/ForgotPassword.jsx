import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { NavLink } from "react-router-dom";
import '@/style/register.css';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ForgotPassword = () => {

  
  const onFinish = (values) => {
    console.log(values);
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Please wait moment');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Confirmed');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <div className='registerMain'>
        <Form
        className='registerForm'
        name="basic"
        onFinish={onFinish}
        labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
        >
            <Form.Item
            name="email"
            label="Email"
            rules={[
                {
                required: true,
                type: 'email',
                message: 'Please input your email!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
            
                <Button type="primary" onClick={showModal}>
                    Confirm
                </Button>
                <Modal
                    title="We will send you an email to renew password."
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>{modalText}</p>
                </Modal>
            
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
                >
                <NavLink to={`/login`}>Back to login</NavLink>
            </Form.Item>
        </Form>
    </div>
    
  );
};


export default ForgotPassword;
