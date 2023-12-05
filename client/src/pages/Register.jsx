import React, { useEffect } from "react";
import { Button, Divider, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { NewUser } from "../apis/usersApi";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    try {
      dispatch(SetLoad(true));
      const response = await NewUser(values);
      dispatch(setLoad(false));
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);

      dispatch(setLoad(false));
    }
  };
  const rules = [
    {
      required: true,
      message: "required",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-white p-5 rounded w-[450px]">
        <h1 className="text-primary text-2xl">
          RMP - <span className="text-gray-400">REGISTER</span>{" "}
        </h1>

        <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item label="Name" name="name" rules={rules}>
            <Input placeHolder="name" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={rules}>
            <Input placeHolder="Email Address" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules}>
            <Input type="password" placeHolder="password" />
          </Form.Item>
          <Button type="primary" className="mt-2" htmlType="submit" block>
            Register
          </Button>
          <div className="mt-5 text-center">
            <span className="text-gray-500">
              already have an account{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
