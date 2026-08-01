import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {

    const navigate = useNavigate();

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("✅ Your payment has been completed successfully!");

        setTimeout(() => {
            navigate("/reservations");
        }, 1500);

    };

    return (

        <div className="container py-5">

            <div
                className="card shadow mx-auto"
                style={{ maxWidth: "550px" }}
            >

                <div className="card-body">

                    <h2 className="text-center mb-4">
                        💳 Secure Payment
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">
                                Card Holder Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Card Number
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            />
                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Expiry Date
                                </label>

                                <input
                                    type="month"
                                    className="form-control"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    required
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    CVV
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    maxLength="3"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                />

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-success w-100 mt-4"
                        >
                            Pay Now
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Payment;