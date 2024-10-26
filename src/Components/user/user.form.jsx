import { Input, Button } from 'antd'
import { useState } from 'react'
import axios from 'axios';


const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickButton = () => {
        console.log({fullName, email, password, phone});

        const url_be = "http://localhost:8080/api/v1/user"
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(url_be, data)

        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    return (
        <div className='user-form' style={{ margin: '20px 0', textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '13px', flexDirection: 'column' }}>
                <div>
                    <span style={{ margin: '10px' }}>Full Name</span>
                    <Input style={{ width: '30%' }}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div>
                    <span style={{ margin: '24px' }}>Email</span>
                    <Input style={{ width: '30%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>
                <div>
                    <span style={{ margin: '12px' }}>Password</span>
                    <Input.Password style={{ width: '30%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                <div>
                    <span style={{ margin: '23px' }}>Phone</span>
                    <Input style={{ width: '30%' }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div >
                    <Button
                        onClick={handleClickButton}
                        type='primary' >Create User
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm

