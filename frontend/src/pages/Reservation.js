import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function Reservation() {

    const { hotelId } = useParams();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [reservation, setReservation] = useState({
        check_in: "",
        check_out: "",
        status: "pending"
    });

    const handleChange = (e) => {

        setReservation({
            ...reservation,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!user) {

            alert("Please login first");
            navigate("/login");
            return;

        }

        if (reservation.check_out <= reservation.check_in) {

            alert("Check Out date must be after Check In date");
            return;

        }

        try {

            const response = await api.post("/reservations", {

                user_id: user.id,
                hotel_id: Number(hotelId),
                check_in: reservation.check_in,
                check_out: reservation.check_out,
                status: reservation.status

            });

            alert(response.data.message);

            // الانتقال إلى صفحة الدفع
            navigate("/payment");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Error creating reservation"
            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Hotel Reservation
                            </h2>

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

                                <button
                                    type="submit"
                                    className="btn btn-success w-100"
                                >
                                    Reserve Now
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Reservation;