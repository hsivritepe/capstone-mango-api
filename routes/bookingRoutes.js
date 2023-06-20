const router = require('express').Router();
const bookingControler = require('../controllers/bookingControllers');

router
    .route('/')
    .get(bookingControler.getAllBookings)
    .post(bookingControler.createBooking);
router
    .route('/:id')
    .get(bookingControler.getBooking)
    .put(bookingControler.editBooking)
    .delete(bookingControler.deleteBooking);

module.exports = router;
