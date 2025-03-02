import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'
import { useContext, useState } from 'react'
import '../assets/css/Login.css'
import { AuthContext } from '../Provider/AuthProvider'
import axios from 'axios'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true) // Toggle between login and signup
  const { createUser, loginUser, updateUserprofile, loginWithGoogle } = useContext(AuthContext)

  const handleLogin = values => {
    loginUser(values.email, values.password)
      .then(() => {
        message.success('Signup successful!')
      })
      .catch(() => {
        message.error('Signup faild!')
      })
  }

  const handleGoogleLogin = () =>{
    loginWithGoogle()
    .then(()=>{
      message.success('You are successfuly loged in.')
    })
    .catch(()=>{
      message.error('Faild to login.')
    })
  }
  const handleSignup = values => {
    createUser(values.email, values.password)
      .then(() => {
        updateUserprofile(values.displayName, values.photoURL)
          .then(() => {
            axios
              .post(
                'https://task-management-application-server-side-six.vercel.app/user',
                values
              )
              .then(() => {
                message.success('Signup successful!')
              })
          })
          .catch(() => {
            message.error('Signup faild!')
          })
      })
      .catch(() => {
        message.error('Signup faild!')
      })
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex bg-white shadow-2xl rounded-lg w-full max-w-4xl overflow-hidden'>
        {/* Image Section */}
        <div className='bg-cover bg-center w-1/2'>
          <div className='flex justify-center items-center bg-gray-700 bg-opacity-50 h-full'>
            <div className='text-white text-center'>
              <h1 className='mb-2 font-bold text-6xl'>Task Vibe</h1>
              <p className='mt-2 font-semibold text-lg'>
                Organize your tasks effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className='p-8 w-1/2'>
          <h2 className='mb-4 font-bold text-gray-800 text-3xl'>
            {isLogin ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p className='mb-6 text-gray-600 text-lg'>
            {isLogin
              ? 'Log in to manage your tasks.'
              : 'Sign up to get started with Task Manager.'}
          </p>

          {isLogin ? (
            <Form
              name='login-form'
              initialValues={{ remember: true }}
              onFinish={handleLogin}
            >
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder='Email' />
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder='Password'
                />
              </Form.Item>

              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a
                  className='float-right text-blue-500'
                  href='/forgot-password'
                >
                  Forgot password?
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='bg-blue-500 hover:bg-blue-600 w-full'
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form
              name='Signup-form'
              initialValues={{ remember: true }}
              onFinish={handleSignup}
            >
              <Form.Item
                name='displayName'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder='Name' />
              </Form.Item>

              <Form.Item
                name='photoURL'
                rules={[
                  { required: true, message: 'Please input your photoURL!' }
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder='photoURL' />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder='Email' />
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder='Password'
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='bg-blue-500 hover:bg-blue-600 w-full'
                >
                  Sign up
                </Button>
              </Form.Item>
            </Form>
          )}

          <div>
            <Button
              style={{fontSize: '28px', padding: '20px'}}
              htmlType='submit'
              className='w-full'
              onClick={handleGoogleLogin}
            >
              <GoogleOutlined /> <span className='font-semibold text-lg'>Login with google</span>
            </Button>
          </div>

          <div className='mt-4 text-center'>
            <span className='text-gray-600'>
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className='text-blue-500 hover:underline'
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
