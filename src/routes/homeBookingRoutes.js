const router = require('express').Router();
const homeBookingController = require('../controllers/homeBookingControllers');

router
    .route('/:homeId/bookings')
    .get(homeBookingController.getAllBookingsForHomeHandler);

module.exports = router;
