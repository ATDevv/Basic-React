import { ArrowRightOutlined, LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, notification, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginUserApi } from '../services/api.services';
import { useContext } from 'react';
import { AuthContext } from '../Components/context/auth.context';

const LoginPage = () => {
    const [form] = useForm()
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        console.log('Received values of form: ', values)

        const res = await LoginUserApi(values.email, values.password)
        if (res.data) {
            message.success('Login successfully')
            localStorage.setItem('access_token', res.data.access_token)
            setUser(res.data.user)
            navigate("/")
        }
        else {
            notification.error({
                message: 'Login User Error',
                description: JSON.stringify(message.error)
            })
        }
    };

    const handleLogin = () => {
        console.log(form.getFieldsValue());
    }

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            border: '1px solid #ccc',
            width: 'min(700px, 90%)',
            borderRadius: '20px',
        }}>
            <h1 style={{
                textAlign: 'center',
                marginTop: "15px",
                marginBottom: '50px'
            }}>LOGIN</h1>
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                style={{
                    padding: '20px',
                }}
                onFinish={onFinish}
                form={form}

            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            form.submit()
                        }
                    }} />
                </Form.Item>
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <NavLink to="#">Forgot password</NavLink>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit"
                        onClick={handleLogin}
                    // loading={true}
                    >
                        Log in
                    </Button>
                    or <NavLink to="/register">Register now!</NavLink>
                </Form.Item>
            </Form>
            <Form>
                <div style={{
                    textAlign: 'right',
                    margin: '10px',
                }}>
                    <Button>
                        <NavLink to='/'>Go to HomePage </NavLink>
                        <ArrowRightOutlined style={{
                            color: 'blue',
                        }} />
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginPage