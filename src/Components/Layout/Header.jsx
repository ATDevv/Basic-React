import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd"
import { UserOutlined, SearchOutlined, AppstoreOutlined, AuditOutlined, AliwangwangOutlined } from '@ant-design/icons'
import { useContext, useState } from "react"
import Btn_ResLog from "../About_Me/btn_res";
import { AuthContext } from "../context/auth.context";
import { label } from "motion/react-client";

const Header = () => {
    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext)

    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

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
                    label: 'Log Out',
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