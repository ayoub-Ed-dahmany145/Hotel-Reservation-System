import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditReservation() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [reservation, setReservation] = useState({
        user_id: "",
        hotel_id: "",
        check_in: "",
        check_out: "",
        status: "pending"
    });

    useEffect(() => {
        loadReservation();
    }, [id]);

    const loadReservation = async () => {

        try {

            const response = await api.get(`/reservations/${id}`);

            setReservation({
                user_id: response.data.user_id,
                hotel_id: response.data.hotel_id,
                check_in: response.data.check_in
                    ? response.data.check_in.substring(0, 10)
                    : "",
                check_out: response.data.check_out
                    ? response.data.check_out.substring(0, 10)
                    : "",
                status: response.data.status
            });

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setReservation({
            ...reservation,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (reservation.check_out <= reservation.check_in) {
            alert("Check Out date must be after Check In date");
            return;
        }

        try {

            const response = await api.put(
                `/reservations/${id}`,
                reservation
            );

            alert(response.data.message);

            navigate("/reservations");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Error updating reservation"
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

                                <h1>📅</h1>

                                <h2 className="fw-bold">
                                    Edit Reservation
                                </h2>

                                <p className="text-muted">
                                    Update your booking information
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Check In
                                    </label>

                                    <input
                                        type="date"
                                        name="check_in"
                                        className="form-control"
                                        value={reservation.check_in}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Check Out
                                    </label>

                                    <input
                                        type="date"
                                        name="check_out"
                                        className="form-control"
                                        value={reservation.check_out}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Status
                                    </label>

                                    <select
                                        name="status"
                                        className="form-select"
                                        value={reservation.status}
                                        onChange={handleChange}
                                    >
                                        <option value="pending">
                                            Pending
                                        </option>

                                        <option value="confirmed">
                                            Confirmed
                                        </option>

                                    </select>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 py-2"
                                >
                                    Update Reservation
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditReservation;