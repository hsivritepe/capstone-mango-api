const bookingService = require('../services/bookingServices');

// GET all bookings
const getAllBookingsHandler = async (req, res) => {
    const result = await bookingService.getAllBookings();

    res.status(result.statusCode).json(result.json);
};

// GET a single booking
const getBookingHandler = async (req, res) => {
    const result = await bookingService.getBooking(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// CREATE new booking
const createBookingHandler = async (req, res) => {
    const result = await bookingService.createBooking(req.body);

    res.status(result.statusCode).json(result.json);
};

// EDIT booking
const editBookingHandler = async (req, res) => {
    const result = await bookingService.editBooking(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE booking
const deleteBookingHandler = async (req, res) => {
    const result = await bookingService.deleteBooking(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// RECENT BOOKINGS
const recentBookingsHandler = async (req, res) => {
    const result = await bookingService.recentBookings();

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllBookingsHandler,
    getBookingHandler,
    createBookingHandler,
    editBookingHandler,
    deleteBookingHandler,
    recentBookingsHandler,
};
