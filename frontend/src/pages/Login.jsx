import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import ApiManager from "../Api/Api";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../Redux/Reducers/alertSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginInAuth = async (values) => {
    try {
      dispatch(showLoading());
      const resp = await ApiManager.login(values);
      dispatch(hideLoading());
      if (resp.data.success === true) {
        localStorage.setItem("token", resp.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(resp.data.error);
      }
    } catch (err) {
      dispatch(hideLoading());
      console.log(err);
      message.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={LoginInAuth} className="register-form ">
        <h3 className="text-center">Login Form</h3>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Log In
        </button>
      </Form>
    </div>
  );
};

export default Login;
