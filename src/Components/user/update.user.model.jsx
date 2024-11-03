import { Input, notification, Modal } from 'antd'
import { useState } from 'react'
import { CreateUserApi } from '../../services/api.services'

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    // const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(true)
    const { isModelUpdateOpen, setIsModelUpdateOpen } = props

    const handleSubmitButton = async () => {
        const res = await CreateUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Sửa User thành công"
            })
            reset()
            await loadUser()
        }
        else {
            notification.error({
                message: "Error Create User",
                description: JSON.stringify(res.message)
            })
        }
    }

    const reset = () => {
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
        setIsModelUpdateOpen(false)
    }

    return (
        <Modal
            title="Update a User"
            open={isModelUpdateOpen}
            onOk={() => handleSubmitButton()}
            okText={'SAVE'}
            onCancel={() => setIsModelUpdateOpen(false)}
            maskClosable={false}
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
    )
}

export default UpdateUserModal