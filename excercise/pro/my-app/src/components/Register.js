import React, { useState } from 'react';
import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, Row, Select, message } from 'antd';
import axios from 'axios';
import {Link, Navigate, useNavigate} from "react-router-dom"

const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const [captcha, setCaptcha] = useState('');
  
  const handleCaptcha = () => {
    let assign = ["A", "B", "C", "D", "E", "F", "G", "h", "i", "j", "k",1,5,7,8,9,];
    
    let a = assign[Math.floor(Math.random() * assign.length)];
    let b = assign[Math.floor(Math.random() * assign.length)];
    let c = assign[Math.floor(Math.random() * assign.length)];
    let d = assign[Math.floor(Math.random() * assign.length)];
    let e = assign[Math.floor(Math.random() * assign.length)];
    let f = assign[Math.floor(Math.random() * assign.length)];

    let generate = a + b + c + d + e + f;
setCaptcha(generate)
    
}


  const onFinish = (values) => {
    if (values.captcha !== captcha) {
      message.error("Please enter the valid CAPTCHA!");
      return;
    }
    // JSON.parse(values)
    console.log('Received values of form: ', values);
    message.success("Registration successful!");


    const fetchdata=async()=>{
      try{
        const res=await axios.post(`http://localhost:3001/products`,values)
        console.log(res)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchdata()
  };




  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70 }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

let navigate= useNavigate()

  const HandleAdmin=()=>{
    navigate("/Adminpage")
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: 'Please input your password!' },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true, message: 'Please input your phone number!' },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          { required: true, message: 'Please select gender!' },
        ]}
      >
        <Select placeholder="Select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that you are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                { required: true, message: 'Please input the CAPTCHA you got!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button onClick={handleCaptcha}>Get CAPTCHA</Button>
          </Col>
        </Row>
        <div style={{ color: "red", fontFamily: "Times New Roman, Times, serif", fontSize: "20px" }}>
          {captcha}
        </div>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register 
          
        </Button> 
        <Button onClick={HandleAdmin}>Admin Dashboard</Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
