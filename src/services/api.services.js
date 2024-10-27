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

export {
    CreateUserApi
}