import { useContext } from "react"
import { AuthContext } from "../Components/context/auth.context"
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";


const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }

    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you need login!"
                extra={<Button type="primary">
                    <Link to='/login'>
                        <span>Go to Login</span>
                    </Link>
                </Button>}
            />
        </>
    )
}

export default PrivateRoute