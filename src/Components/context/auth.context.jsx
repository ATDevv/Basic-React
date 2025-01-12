import { createContext, useContext, useState } from "react"

export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
})

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
    });

    const [isAppLoading, setIsAppLoading] = useState(false)

    return (
        <AuthContext.Provider value={{ user, setUser, isAppLoading, setIsAppLoading }}>
            {props.children}
        </AuthContext.Provider>

        // Giống như =>
        // <AuthContext.Provider value={{user, setUser}}>
        //      <RouterProvider router={router} />
        // </AuthContext.Provider>
        // props.children giúp linh động phần tử bên trong khi khồng cần export
    )
}