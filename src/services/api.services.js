// import axios from "axios"
import axios from "./axios.custom"

const CreateUserApi = (fullName, email, password, phone) => {
    const url_be = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return (axios.post(url_be, data))
}

const updateUserAPI = (_id, fullName, phone) => {
    const url_be = "/api/v1/user"
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return (axios.put(url_be, data))
}

const fetchAllUserAPI = () => {
    const url_be = "/api/v1/user"
    return (axios.get(url_be))
}

const deleteUserAPI = (id) => {
    const url_be = `/api/v1/user/${id}`
    return (
        axios.delete(url_be)
    )
}

const RegisterUserApi = (fullName, email, password, phone) => {
    const url_be = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return (axios.post(url_be, data))
}

const LoginUserApi = (email, password) => {
    const url_be = "/api/v1/user/login"
    const data = {
        username: email,
        password: password
    }
    return (axios.post(url_be, data))
}

const LogoutUserApi = () => {
    const url_be = "/api/v1/auth/logout"
    return (axios.post(url_be, data))
}

export {
    CreateUserApi, fetchAllUserAPI, updateUserAPI, deleteUserAPI,
    RegisterUserApi, LoginUserApi, LogoutUserApi
}