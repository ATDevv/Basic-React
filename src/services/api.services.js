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

export {
    CreateUserApi, fetchAllUserAPI, updateUserAPI
}