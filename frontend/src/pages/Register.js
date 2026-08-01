import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
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

            const response = await api.post("/auth/register", user);

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration failed"
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
                                    Create Account
                                </h2>

                                <p className="text-muted">
                                    Register to start booking hotels
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
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
                                    className="btn btn-success w-100 py-2"
                                >
                                    Register
                                </button>

                            </form>

                            <hr />

                            <p className="text-center mb-0">

                                Already have an account?

                                <Link
                                    to="/login"
                                    className="ms-2 text-decoration-none fw-bold"
                                >
                                    Login
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;