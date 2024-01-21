import React, { useState } from 'react';
import { Button, Form, Input, Select, Modal } from 'antd';
import { NavLink } from "react-router-dom";
import '@/style/register.css';

const { Option } = Select;
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Register = () => {

  const [form] = Form.useForm();
  const onLanguageChange = (value) => {
    switch (value) {
      case 'english':
        form.setFieldsValue({
          note: 'My language is English!',
        });
        break;
      case 'german':
        form.setFieldsValue({
          note: 'My language is German!',
        });
        break;
      case 'dutch':
        form.setFieldsValue({
          note: 'My language is Dutch!',
        });
        break;
      case 'franch':
        form.setFieldsValue({
          note: 'My language is Franch!',
        });
        break;
      default:
    }
  };
  const onCountryChange = (value) => {
    switch (value) {
      case 'uk':
        form.setFieldsValue({
          note: 'My country is UK!',
        });
        break;
      case 'netherland':
        form.setFieldsValue({
          note: 'My country is Netherland!',
        });
        break;
      case 'germany':
        form.setFieldsValue({
          note: 'My country is Germany!',
        });
        break;
      case 'france':
        form.setFieldsValue({
          note: 'My country is France!',
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('We will send you an email to active your account.');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Please wait moment');
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

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            label="Confrim Password"
            name="confirmPassword"
            rules={[
                {
                required: true,
                message: 'Please input your password again!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
                name="country"
                label="Country"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Select
                placeholder="Please choose your Country"
                onChange={onCountryChange}
                allowClear
                >
                <Option value="uk">UK</Option>
                <Option value="netherland">Netherland</Option>
                <Option value="germany">Germany</Option>
                <Option value="france">France</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.country !== currentValues.country}
            >
            </Form.Item>

            <Form.Item
                name="language"
                label="Language"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Select
                placeholder="Please choose your language"
                onChange={onLanguageChange}
                allowClear
                >
                <Option value="english">English</Option>
                <Option value="dutch">Dutch</Option>
                <Option value="german">German</Option>
                <Option value="franch">Franch</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.language !== currentValues.language}
            >
            </Form.Item>
            <Form.Item {...tailLayout}>
            
                <Button type="primary" onClick={showModal}>
                    Confirm
                </Button>
                <Modal
                    title="You registed successfully"
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


export default Register;
