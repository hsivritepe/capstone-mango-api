const router = require('express').Router();
const bookingControler = require('../controllers/bookingControllers');

router.get('/recent', bookingControler.recentBookingsHandler);
router
    .route('/')
    .get(bookingControler.getAllBookingsHandler)
    .post(bookingControler.createBookingHandler);
router
    .route('/:id')
    .get(bookingControler.getBookingHandler)
    .put(bookingControler.editBookingHandler)
    .delete(bookingControler.deleteBookingHandler);

module.exports = router;
