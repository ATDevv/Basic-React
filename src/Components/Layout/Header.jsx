import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd"
import { UserOutlined, HomeOutlined , ProductOutlined } from '@ant-design/icons'
import { useState } from "react"

const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <NavLink to='/'>Home</NavLink>,
            key: 'mail',
            icon: <HomeOutlined />,
        },
        {
            label: <NavLink to='/users'>Users</NavLink>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <NavLink to='/products'>Products</NavLink>,
            key: 'products',
            icon: <ProductOutlined />,
        }
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} 
        />
    )

}

export default Header