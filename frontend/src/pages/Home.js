import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            {/* Hero Section */}
            <section className="bg-dark text-white py-5">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12 mb-4">

                            <h1 className="display-4 fw-bold">
                                Welcome to Hotel Reservation System
                            </h1>

                            <p className="lead mt-3">
                                Find the best hotels at the best prices.
                                Book your stay easily and securely in just a few clicks.
                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/hotels"
                                    className="btn btn-primary btn-lg me-3"
                                >
                                    Browse Hotels
                                </Link>

                                <Link
                                    to="/reservations"
                                    className="btn btn-outline-light btn-lg"
                                >
                                    My Reservations
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-12 text-center">

                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
                                alt="Hotel"
                                className="img-fluid rounded shadow"
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="container py-5">

                <h2 className="text-center mb-5">
                    Why Choose Us?
                </h2>

                <div className="row g-4">

                    <div className="col-lg-4 col-md-6">

                        <div className="card shadow h-100 text-center p-4">

                            <h1>🏨</h1>

                            <h4>Luxury Hotels</h4>

                            <p>
                                Discover premium hotels with excellent services.
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6">

                        <div className="card shadow h-100 text-center p-4">

                            <h1>💰</h1>

                            <h4>Best Prices</h4>

                            <p>
                                Affordable prices with amazing offers every day.
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-12">

                        <div className="card shadow h-100 text-center p-4">

                            <h1>📅</h1>

                            <h4>Easy Booking</h4>

                            <p>
                                Reserve your hotel room in less than one minute.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="bg-primary text-white py-5">

                <div className="container">

                    <div className="row text-center">

                        <div className="col-md-4">

                            <h1>100+</h1>

                            <h5>Hotels</h5>

                        </div>

                        <div className="col-md-4">

                            <h1>500+</h1>

                            <h5>Reservations</h5>

                        </div>

                        <div className="col-md-4">

                            <h1>1000+</h1>

                            <h5>Happy Customers</h5>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;