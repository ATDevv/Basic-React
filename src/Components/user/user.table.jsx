import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd'
import { useState } from 'react';
import UpdateUserModal from './update.user.model';

const UserTable = (props) => {
    const { dataUser } = props

    const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(false)

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
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
            />
        </>
    );

}

export default UserTable