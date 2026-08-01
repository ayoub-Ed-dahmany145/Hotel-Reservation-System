import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Reservation from "./pages/Reservation";
import ReservationsList from "./pages/ReservationsList";
import EditReservation from "./pages/EditReservation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Hotels */}
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/hotels/:id" element={<HotelDetails />} />

                {/* Reservation */}
                <Route
                    path="/reservation/:hotelId"
                    element={<Reservation />}
                />

                {/* Payment */}
                <Route
                    path="/payment"
                    element={<Payment />}
                />

                {/* Reservations */}
                <Route
                    path="/reservations"
                    element={<ReservationsList />}
                />

                <Route
                    path="/reservation/edit/:id"
                    element={<EditReservation />}
                />

                {/* Authentication */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;