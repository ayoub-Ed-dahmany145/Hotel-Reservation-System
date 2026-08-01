const db = require("../config/db");


const getAllHotels = (callback) => {

    const sql = "SELECT * FROM hotels";

    db.query(sql, callback);

};


const getHotelById = (id, callback) => {

    const sql = "SELECT * FROM hotels WHERE id = ?";

    db.query(sql, [id], callback);

};


const createHotel = (hotel, callback) => {

    const sql = `
        INSERT INTO hotels 
        (name, description, location, price, image)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        hotel.name,
        hotel.description,
        hotel.location,
        hotel.price,
        hotel.image
    ], callback);

};


const updateHotel = (id, hotel, callback) => {

    const sql = `
        UPDATE hotels 
        SET name = ?, description = ?, location = ?, price = ?, image = ?
        WHERE id = ?
    `;

    db.query(sql, [
        hotel.name,
        hotel.description,
        hotel.location,
        hotel.price,
        hotel.image,
        id
    ], callback);

};


const deleteHotel = (id, callback) => {

    const sql = "DELETE FROM hotels WHERE id = ?";

    db.query(sql, [id], callback);

};


module.exports = {
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
};