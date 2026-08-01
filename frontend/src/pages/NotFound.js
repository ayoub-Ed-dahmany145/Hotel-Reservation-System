import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container text-center py-5">

            <h1 className="display-1 text-danger fw-bold">
                404
            </h1>

            <h3>Page Not Found</h3>

            <p className="text-muted">
                Sorry, this page does not exist.
            </p>

            <Link
                to="/"
                className="btn btn-primary mt-3"
            >
                Back Home
            </Link>

        </div>
    );
}

export default NotFound;