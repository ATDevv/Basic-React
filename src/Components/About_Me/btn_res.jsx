import { RightCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

const Btn_ResLog = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: "right",
            gap: '15px',
            marginTop: '-40px',
            marginRight: '20px'
        }}>
            <NavLink to='/register'>
                <Button type='primary'>Register</Button>
            </NavLink>
            <NavLink to='/login'>
                <Button>Login</Button>
            </NavLink>
        </div>
    )
}

export default Btn_ResLog