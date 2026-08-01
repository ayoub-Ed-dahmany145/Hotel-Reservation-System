const db = require("../config/db");


// Create Reservation
const createReservation = (reservation, callback) => {

    const sql = `
        INSERT INTO reservations
        (user_id, hotel_id, check_in, check_out, status)
        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(sql, [

        reservation.user_id,
        reservation.hotel_id,
        reservation.check_in,
        reservation.check_out,
        reservation.status

    ], callback);

};




// Get All Reservations With Hotel Details
const getAllReservations = (callback) => {

    const sql = `
        SELECT

            reservations.id,
            reservations.user_id,
            reservations.check_in,
            reservations.check_out,
            reservations.status,
            reservations.created_at,

            hotels.name AS hotel_name,
            hotels.location,
            hotels.price


        FROM reservations


        INNER JOIN hotels

        ON reservations.hotel_id = hotels.id

    `;


    db.query(sql, callback);

};




// Get Reservation By ID
const getReservationById = (id, callback) => {

    const sql = `
        SELECT 
            reservations.*,
            hotels.name AS hotel_name,
            hotels.location,
            hotels.price

        FROM reservations

        INNER JOIN hotels

        ON reservations.hotel_id = hotels.id

        WHERE reservations.id = ?
    `;


    db.query(sql, [id], callback);

};




// Update Reservation
const updateReservation = (id, reservation, callback) => {


    const sql = `
        UPDATE reservations

        SET 
            user_id = ?,
            hotel_id = ?,
            check_in = ?,
            check_out = ?,
            status = ?

        WHERE id = ?

    `;



    db.query(sql, [

        reservation.user_id,
        reservation.hotel_id,
        reservation.check_in,
        reservation.check_out,
        reservation.status,
        id

    ], callback);


};




// Delete Reservation
const deleteReservation = (id, callback) => {

    const sql = `
        DELETE FROM reservations
        WHERE id = ?
    `;


    db.query(sql, [id], callback);

};





module.exports = {

    createReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    deleteReservation

};