import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("user");
        navigate("/login");
        window.location.reload();

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    🏨 Hotel Reservation
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/hotels">
                                Hotels
                            </Link>
                        </li>

                        {user && (

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/reservations"
                                >
                                    My Reservations
                                </Link>
                            </li>

                        )}

                        {!user ? (

                            <>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="btn btn-primary ms-2"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </li>

                            </>

                        ) : (

                            <>

                                <li className="nav-item mx-3 text-white">
                                    Welcome, {user.name}
                                </li>

                                <li className="nav-item">
                                    <button
                                        onClick={logout}
                                        className="btn btn-danger"
                                    >
                                        Logout
                                    </button>
                                </li>

                            </>

                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;