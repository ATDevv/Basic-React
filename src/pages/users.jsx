import UserForm from "../Components/user/user.form"
import UserTable from "../Components/user/user.table"
import { useState, useEffect } from 'react'
import { fetchAllUserAPI } from '../services/api.services'

const UsersPage = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser()
    }, [])
    // [] để nói cho react biết chỉ render data 1 lần

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (
        <>
            <UserForm loadUser={loadUser}/>
            <UserTable dataUser={dataUser} loadUser={loadUser}/>
        </>
    )
}

export default UsersPage