import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/global.css'

export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="boxBack">
                <Link to='/' className="backHome">
                    <span>Back to HomePage</span>
                </Link>
            </div>
        </div>
    );
}