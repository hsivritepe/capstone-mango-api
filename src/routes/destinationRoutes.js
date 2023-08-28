const router = require('express').Router();
const destinationControllers = require('../controllers/destinationControllers');
const { route } = require('./bookingRoutes');

router
    .route('/')
    .get(destinationControllers.getAllDestinationsHandler)
    .post(destinationControllers.createDestinationHandler);

router
    .route('/:id')
    .get(destinationControllers.getDestinationHandler)
    .put(destinationControllers.editDestinationHandler)
    .delete(destinationControllers.deleteDestinationHandler);

module.exports = router;
