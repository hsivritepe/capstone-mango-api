const router = require('express').Router();
const bookingControler = require('../controllers/bookingControllers');

router.get('/recent', bookingControler.recentBookings);
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
