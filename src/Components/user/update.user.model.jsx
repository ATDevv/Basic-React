import { Input, notification, Modal } from 'antd'
import { useEffect, useState } from 'react'
import { updateUserAPI } from '../../services/api.services'

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setID] = useState("");

    // const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(true)
    const { isModelUpdateOpen, setIsModelUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props

    useEffect(() => {
            if(dataUpdate){
                setID(dataUpdate._id)
                setFullName(dataUpdate.fullName)
                setPhone(dataUpdate.phone)
            }
        }, [dataUpdate])

    const handleSubmitButton = async () => {
        const res = await updateUserAPI(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Success Create User"
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
        setID("")
        setPhone("")
        setIsModelUpdateOpen(false)
        setDataUpdate(null)
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
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>

                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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