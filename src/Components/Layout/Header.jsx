import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, message, notification } from "antd"
import { UserOutlined, SearchOutlined, AppstoreOutlined, AuditOutlined, AliwangwangOutlined } from '@ant-design/icons'
import { useContext, useState } from "react"
import Btn_ResLog from "../About_Me/btn_res";
import { AuthContext } from "../context/auth.context";
import { label } from "motion/react-client";
import { LogoutUserApi } from "../../services/api.services";

const Header = () => {
    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext)

    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    const hanldeLogout = async () => {
        const res = await LogoutUserApi();

        if (res.data) {
            //CLear data
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: "",
            })
            message.success('Logout Successfully');
            navigate('/')
        }
    }

    const items = [
        {
            label: <NavLink to='/'>About Me</NavLink>,
            key: 'mail',
            icon: <SearchOutlined />,
        },
        {
            label: <NavLink to='/todo'>To Do</NavLink>,
            key: 'todo',
            icon: <AppstoreOutlined />
        },
        {
            label: <NavLink to='/users'>Users</NavLink>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <NavLink to='/books'>Books</NavLink>,
            key: 'book',
            icon: <AuditOutlined />
        },
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={handleLogout}>Log Out</span>,
                    key: 'logout'
                }
            ]
        }] : [])
    ];

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
            <Btn_ResLog />
        </>
    )
}

export default Header