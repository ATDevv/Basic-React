import { Button, Divider, Flex, Form, Input, notification } from "antd"
import { RegisterUserApi } from "../services/api.services";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('>>> Check vlaues :', values);

        const res = await RegisterUserApi(
            values.fullNanme,
            values.email,
            values.password,
            values.phone
        )
        if (res.data) {
            notification.success({
                message: 'Register User',
                description: 'Registered successfully'
            })
            navigate("/login")
        }
        else {
            notification.error({
                message: 'Register User Error',
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <>
            <h1 style={{
                textAlign: 'center',
                marginTop: "15px",
            }}>REGISTER</h1>
            <Form
                form={form}
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                style={{
                    maxWidth: 700,
                    margin: 'auto',
                    textAlign: 'right'
                }}
            >
                <div style={{
                    margin: '50px',
                }}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
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
                            {
                                min: 6,
                                message: 'Password must be min 6 characters'
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="confirm_password"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button
                            onClick={() => {
                                console.log(form.getFieldsValue())
                            }}
                            style={{
                                marginRight: '15px'
                            }}>
                            View - Consolog
                        </Button>

                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                    <Divider />
                    <Flex justify="center">
                        <Form.Item label={null}>
                            You have account <NavLink to="/login">Login now!</NavLink>
                        </Form.Item>
                    </Flex>
                </div>
            </Form >
        </>
    )
}

export default RegisterPage