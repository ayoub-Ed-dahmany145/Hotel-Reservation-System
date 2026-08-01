const express = require("express");
const router = express.Router();

console.log("hotelRoutes file loaded");

const { 
    getHotels, 
    getHotelById, 
    createHotel,
    updateHotel,
    deleteHotel
} = require("../controllers/hotelController");


router.get("/", getHotels);

router.get("/:id", getHotelById);

router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);


module.exports = router;