const router = require('express').Router();
const homeBookingController = require('../controllers/homeBookingControllers');

router
    .route('/:homeId/bookings')
    .get(homeBookingController.getAllBookingsForHome);

module.exports = router;
