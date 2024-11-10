import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd'
import { useState } from 'react';
import UpdateUserModal from './update.user.model';
import ViewDetailUer from './details.user';

const UserTable = (props) => {
    const { dataUser, loadUser } = props

    const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const [detailData, setDetailData] = useState(null)
    const [openDetail, setOpenDetail] = useState(false)

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
                        style={{ cursor: 'pointer'}}
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModelUpdateOpen(true)
                        }}
                    />
                    <DeleteOutlined style={{ cursor: 'pointer' }}/>
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