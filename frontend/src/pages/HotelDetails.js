import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function HotelDetails() {

    const { id } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        loadHotel();
    }, []);

    const loadHotel = async () => {

        try {

            const response = await api.get(`/hotels/${id}`);
            setHotel(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    if (!hotel) {

        return (

            <div className="container text-center mt-5">

                <div className="spinner-border text-primary"></div>

                <h4 className="mt-3">Loading Hotel...</h4>

            </div>

        );

    }

    return (

        <div className="container py-5">

            <div className="card shadow border-0 rounded-4 overflow-hidden">

                <img
                    src={`https://picsum.photos/1000/450?random=${hotel.id}`}
                    alt={hotel.name}
                    className="card-img-top"
                    style={{
                        height: "420px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body p-4">

                    <h2 className="fw-bold">
                        {hotel.name}
                    </h2>

                    <p className="text-muted fs-5">
                        📍 {hotel.location}
                    </p>

                    <h3 className="text-success fw-bold">
                        💰 {hotel.price} DH / Night
                    </h3>

                    <hr />

                    <h4>Description</h4>

                    <p className="text-secondary">
                        {hotel.description}
                    </p>

                    <hr />

                    <h4>Hotel Services</h4>

                    <div className="row">

                        <div className="col-md-6">

                            <ul className="list-group list-group-flush">

                                <li className="list-group-item">✅ Free WiFi</li>
                                <li className="list-group-item">✅ Swimming Pool</li>
                                <li className="list-group-item">✅ Free Parking</li>

                            </ul>

                        </div>

                        <div className="col-md-6">

                            <ul className="list-group list-group-flush">

                                <li className="list-group-item">✅ Restaurant</li>
                                <li className="list-group-item">✅ Air Conditioning</li>
                                <li className="list-group-item">✅ 24/7 Reception</li>

                            </ul>

                        </div>

                    </div>

                    <div className="mt-4 d-grid">

                        <Link
                            to={`/reservation/${hotel.id}`}
                            className="btn btn-success btn-lg"
                        >
                            Reserve Now
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default HotelDetails;