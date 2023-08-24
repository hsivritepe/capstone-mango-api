const router = require('express').Router();
const destinationControllers = require('../controllers/destinationControllers');
const { route } = require('./bookingRoutes');

router
    .route('/')
    .get(destinationControllers.getAllDestinations)
    .post(destinationControllers.createDestination);

router
    .route('/:id')
    .get(destinationControllers.getDestination)
    .put(destinationControllers.editDestination)
    .delete(destinationControllers.deleteDestination);

module.exports = router;
