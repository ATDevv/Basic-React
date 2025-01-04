import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div style={{
            marginTop: '10vh'
        }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">
                    <Link to='/'>
                        <span>Back to HomePage</span>
                    </Link>
                </Button>}
            />
        </div>
    );
}