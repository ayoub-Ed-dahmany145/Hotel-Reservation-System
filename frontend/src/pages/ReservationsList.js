import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function ReservationsList() {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        loadReservations();
    }, []);

    const loadReservations = () => {

        api.get("/reservations")
            .then((response) => {
                setReservations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to cancel this reservation?"
        );

        if (!confirmDelete) return;

        try {

            const response = await api.delete(`/reservations/${id}`);

            alert(response.data.message);

            loadReservations();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Error deleting reservation"
            );

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">
                My Reservations
            </h2>

            <div className="row">

                {reservations.map((reservation) => (

                    <div
                        className="col-md-6 mb-4"
                        key={reservation.id}
                    >

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h4 className="card-title">
                                    {reservation.hotel_name}
                                </h4>

                                <p>
                                    📍 {reservation.location}
                                </p>

                                <p>
                                    💰 {reservation.price} DH / Night
                                </p>

                                <hr />

                                <p>
                                    📅 Check In :
                                    <b> {reservation.check_in}</b>
                                </p>

                                <p>
                                    📅 Check Out :
                                    <b> {reservation.check_out}</b>
                                </p>

                                <p>
                                    Status :

                                    <span
                                        className={
                                            reservation.status === "confirmed"
                                                ? "badge bg-success ms-2"
                                                : "badge bg-warning text-dark ms-2"
                                        }
                                    >
                                        {reservation.status}
                                    </span>

                                </p>

                                <div className="d-flex gap-2 mt-3">

                                    <Link
                                        to={`/reservation/edit/${reservation.id}`}
                                        className="btn btn-warning w-50"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger w-50"
                                        onClick={() => handleDelete(reservation.id)}
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ReservationsList;