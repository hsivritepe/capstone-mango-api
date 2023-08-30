const homeBookingService = require('../services/homeBookingServices');

// GET all homeatts for a home
const getAllBookingsForHomeHandler = async (req, res) => {
    const result = await homeBookingService.getAllBookingsForHome(
        req.params.homeId
    );

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllBookingsForHomeHandler,
};
