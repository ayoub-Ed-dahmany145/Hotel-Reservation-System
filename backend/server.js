const express = require("express");
const cors = require("cors");
const hotelRoutes = require("./routes/hotelRoutes");
const authRoutes = require("./routes/authRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

require("dotenv").config();

const db = require("./config/db");

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/hotels", hotelRoutes);
console.log("Hotel routes loaded");


app.use("/api/auth", authRoutes);


app.use("/api/reservations", reservationRoutes);
console.log("Reservation routes loaded");


app.get("/", (req, res) => {
    res.send("Hotel Reservation API is Running...");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});