import React from "react";
import "./Login.scss";
import axios from "axios";
import { Button, Form, Input } from "antd";

const Login = ({closeModal}) => {
  const api = process.env.REACT_APP_API_URL;
  const onFinish = (values) => {
    console.log("Success:", values);
    submitForm(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const submitForm = (values) => {
    axios
      .post(api + "/login", values)
      .then((res) => {
        console.log(res);
        if (res.data) {
          localStorage.setItem("accessToken", res.data.token);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          closeModal()
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-component">
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          gap: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 3,
              message: "Username must be at least 3 characters.",
            },
            {
              max: 17,
              message: "Username must be at most 17 characters.",
            },
            {
              // no space
              whitespace: false,
              message: "Username cannot contain spaces.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          colon={false}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
