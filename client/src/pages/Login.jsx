import React, { useEffect } from 'react'
import {Button, Divider, Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { SigninUser } from '../apis/usersApi'
import { useDispatch } from 'react-redux'
import { setLoad } from '../redux/loadSlice'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async (values) =>{
   try {
    dispatch(setLoad(true))
    const response = await SigninUser (values)
    dispatch(setLoad(false))
    if (response.success){
      message.success(response.message)
      localStorage.setItem("token", response.data)
      navigate('/')

    }else{
      message.error(response.message)
    }
   } catch (error) {
    message.error(error.message)
    dispatch(setLoad(false))
   }
  }
  const rules =[{
    required:true,
    message:'required'
  }]
  useEffect(() =>{
    if (localStorage.getItem('token')){
      navigate('/')
    }
  },[])
  return (
    <div
    className='h-screen bg-primary flex justify-center items-center'
    >
      <div className='bg-white p-5 rounded w-[450px]'>
        <h1 className='text-primary text-2xl'>RMP - <span className='text-gray-400'>Login</span> </h1>
        
        <Form
        layout='vertical'
        onFinish={handleLogin}
        >
          <Form.Item label='Email' name='email'rules={rules}>
            <Input placeHolder='Email Address'/>
          </Form.Item>
          <Form.Item label='Password' name='password'rules={rules}>
            <Input type='password' placeHolder='password'/>
          </Form.Item>
          <Button type='primary' className='mt-2' htmlType='submit' block>Login</Button>
          <div className='mt-5 text-center'>
          <span className='text-gray-500'>
            don't have an account <Link className='text-primary' to = '/register'>Register</Link>
          </span>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login