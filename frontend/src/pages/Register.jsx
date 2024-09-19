import { Form, Input, message } from "antd";
import React from "react";
import "../styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import ApiManager from "../Api/Api";

const Register = () => {
  const navigate = useNavigate();

  const SignInAuth = (values) => {
    ApiManager.signin(values)
      .then((resp) => {
        if (resp.data.success == true) {
          message.success("Register Successfully");
          navigate("/login");
        } else {
          message.error(resp.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Somethings went wrong");
      });
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={SignInAuth}
          className="register-form "
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already userlogin here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
