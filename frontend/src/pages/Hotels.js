import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Hotels() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        loadHotels();
    }, []);

    const loadHotels = async () => {
        try {
            const response = await api.get("/hotels");
            setHotels(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="container py-5">

            <h2 className="text-center fw-bold mb-5">
                🏨 Our Hotels
            </h2>

            <div className="row g-4">

                {hotels.map((hotel) => (

                    <div
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                        key={hotel.id}
                    >

                        <div className="card h-100 shadow">

                            <img
                                src={`/images/${hotel.image}`}
                                className="card-img-top"
                                alt={hotel.name}
                                style={{
                                    height: "220px",
                                    objectFit: "cover"
                                }}
                                onError={(e) => {
                                    e.target.src = "/images/default.jpg";
                                }}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="fw-bold">
                                    {hotel.name}
                                </h4>

                                <p className="text-muted">
                                    📍 {hotel.location}
                                </p>

                                <p className="flex-grow-1">
                                    {hotel.description}
                                </p>

                                <h5 className="text-success fw-bold">
                                    💰 {hotel.price} DH / Night
                                </h5>

                            </div>

                            <div className="card-footer bg-white border-0">

                                <Link
                                    to={`/hotels/${hotel.id}`}
                                    className="btn btn-primary w-100"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Hotels;