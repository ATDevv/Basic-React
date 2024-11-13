import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd'
import { useState } from 'react';
import UpdateUserModal from './update.user.model';
import ViewDetailUer from './details.user';
import { deleteUserAPI } from '../../services/api.services';

const UserTable = (props) => {
    const { dataUser, loadUser } = props

    const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const [detailData, setDetailData] = useState(null)
    const [openDetail, setOpenDetail] = useState(false)

    const handleDeleteUser = async (id) => {
        const deleteUser = await deleteUserAPI(id)
        //     const userLoad = dataUser.filter(record => record._id != id)
        //     loadUser(userLoad)
        if (deleteUser.data) {
            notification.success({
                message: "Create User",
                description: "Success Delete User"
            })
            await loadUser()
        }
        else {
            notification.error({
                message: "Error Delete User",
                description: JSON.stringify(res.message)
            })
        }
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        href="#"
                        onClick={() => {
                            setDetailData(record)
                            setOpenDetail(true)
                        }}
                    >
                        {record._id}
                    </a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '20px' }}>
                    <EditOutlined
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModelUpdateOpen(true)
                        }}
                    />
                    <Popconfirm
                        title="Delete User"
                        description="Are you sure to delete user?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ cursor: 'pointer' }} />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={'_id'}
            />
            <UpdateUserModal
                isModelUpdateOpen={isModelUpdateOpen}
                setIsModelUpdateOpen={setIsModelUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewDetailUer
                detailData={detailData}
                setDetailData={setDetailData}
                openDetail={openDetail}
                setOpenDetail={setOpenDetail}
            />
        </>
    );

}

export default UserTable