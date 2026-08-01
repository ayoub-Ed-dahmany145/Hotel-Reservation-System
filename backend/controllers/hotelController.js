const hotelModel = require("../models/hotelModel");


// Get all hotels
const getHotels = (req, res) => {

    console.log("GET HOTELS CALLED");

    hotelModel.getAllHotels((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Error getting hotels",
                error: err
            });
        }

        res.json(results);

    });

};


// Get hotel by ID
const getHotelById = (req, res) => {

    const id = req.params.id;

    console.log("GET HOTEL BY ID:", id);

    hotelModel.getHotelById(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Error getting hotel",
                error: err
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Hotel not found"
            });
        }

        res.json(results[0]);

    });

};


// Create hotel
const createHotel = (req, res) => {

    const hotel = req.body;

    console.log("CREATE HOTEL:", hotel);

    hotelModel.createHotel(hotel, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error creating hotel",
                error: err
            });
        }

        res.json({
            message: "Hotel created successfully",
            id: result.insertId
        });

    });

};


// Update hotel
const updateHotel = (req, res) => {

    const id = req.params.id;
    const hotel = req.body;

    console.log("UPDATE HOTEL:", id);

    hotelModel.updateHotel(id, hotel, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error updating hotel",
                error: err
            });
        }

        res.json({
            message: "Hotel updated successfully"
        });

    });

};


// Delete hotel
const deleteHotel = (req, res) => {

    const id = req.params.id;

    console.log("DELETE HOTEL:", id);

    hotelModel.deleteHotel(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error deleting hotel",
                error: err
            });
        }

        res.json({
            message: "Hotel deleted successfully"
        });

    });

};


module.exports = {
    getHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
};