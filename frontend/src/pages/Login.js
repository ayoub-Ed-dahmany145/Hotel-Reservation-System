import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", user);

            alert(response.data.message);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login failed"
            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-lg-5 col-md-7">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body p-5">

                            <div className="text-center mb-4">

                                <h1>🏨</h1>

                                <h2 className="fw-bold">
                                    Welcome Back
                                </h2>

                                <p className="text-muted">
                                    Login to your account
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-2"
                                >
                                    Login
                                </button>

                            </form>

                            <hr />

                            <p className="text-center mb-0">

                                Don't have an account?

                                <Link
                                    to="/register"
                                    className="ms-2 text-decoration-none fw-bold"
                                >
                                    Register
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;