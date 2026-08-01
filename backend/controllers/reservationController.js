const reservationModel = require("../models/reservationModel");


const createReservation = (req, res) => {

    const reservation = req.body;

    reservationModel.createReservation(reservation, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error creating reservation",
                error: err
            });
        }

        res.json({
            message: "Reservation created successfully",
            id: result.insertId
        });

    });

};


const getReservations = (req, res) => {

    reservationModel.getAllReservations((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Error getting reservations",
                error: err
            });
        }

        res.json(results);

    });

};


const getReservationById = (req, res) => {

    const id = req.params.id;

    reservationModel.getReservationById(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Error getting reservation",
                error: err
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Reservation not found"
            });
        }

        res.json(results[0]);

    });

};


const updateReservation = (req, res) => {

    const id = req.params.id;
    const reservation = req.body;

    reservationModel.updateReservation(id, reservation, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error updating reservation",
                error: err
            });
        }

        res.json({
            message: "Reservation updated successfully"
        });

    });

};


const deleteReservation = (req, res) => {

    const id = req.params.id;

    reservationModel.deleteReservation(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error deleting reservation",
                error: err
            });
        }

        res.json({
            message: "Reservation deleted successfully"
        });

    });

};


module.exports = {
    createReservation,
    getReservations,
    getReservationById,
    updateReservation,
    deleteReservation
};