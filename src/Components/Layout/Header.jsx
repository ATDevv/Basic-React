import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd"
import { UserOutlined, SearchOutlined, AppstoreOutlined, AuditOutlined } from '@ant-design/icons'
import { useState } from "react"
import Btn_ResLog from "../About_Me/btn_res";

const Header = () => {
    const [current, setCurrent] = useState('');
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
        // {
        //     label: <NavLink to='/register'>egister</NavLink>,
        //     key: 'register',
        //     icon: <AuditOutlined />
        // },
        // {
        //     label: <NavLink to='/login'>Login</NavLink>,
        //     key: 'login',
        //     icon: <AuditOutlined />
        // }
    ];

    return (
        <>
            <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} 
            />
            <Btn_ResLog/>
        </>
    )

}

export default Header