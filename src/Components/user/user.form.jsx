import { Input, Button, notification, Modal } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { CreateUserApi } from '../../services/api.services'


const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmitButton = async () => {

        const res = await CreateUserApi(fullName, email, password, phone)
        //truyền tham số như thế này được vig CreateUserApi là 1 hàm js bth không phải ReactComponents

        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tạo User thành công"
            })
            setIsModalOpen(false)
        }
        else {
            notification.error({
                message: "Error Create User",
                description: JSON.stringify(res.message) //format string type
            })
        }
        // console.log(res.data.data);

        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    return (
        <div className='user-form' style={{ margin: '10px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                <h3>Table User</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type='primary' >Create User
                </Button>
            </div>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={() => handleSubmitButton()}
                okText={'CREATE'}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false} //click ra ngoài kh bị đóng modal
            >
                <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Password</span>
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Phone</span>
                        <Input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserForm

