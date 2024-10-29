import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { fetchAllUserAPI } from '../../services/api.services';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([
        { _id: 'ATD', fullName: 'Dinh Tuan Anh', email: 'abc@gmail.com' },
        { _id: 'ATD2', fullName: 'Dinh Tuan Anh 2', email: 'abc2@gmail.com' }
    ]);



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
    ];

    useEffect(() => {
        const loadUser = async () => {
            const res = await fetchAllUserAPI()
            console.log('>>> Check res', res.data);
            setDataUser(res.data)
        }
        loadUser()
    }, [])
    // [] để nói cho react biết chỉ render data 1 lần

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={'_id'} />
    );

}

export default UserTable