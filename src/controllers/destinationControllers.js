const destinationService = require('../services/destinationServices');

// GET all destinations
const getAllDestinationsHandler = async (req, res) => {
    const result = await destinationService.getAllDestinations();

    res.status(result.statusCode).json(result.json);
};

// GET a single destination
const getDestinationHandler = async (req, res) => {
    const result = await destinationService.getDestination(
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

// CREATE new destination
const createDestinationHandler = async (req, res) => {
    const result = await destinationService.createDestination(
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// EDIT destination
const editDestinationHandler = async (req, res) => {
    const result = await destinationService.editDestination(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE destination
const deleteDestinationHandler = async (req, res) => {
    const result = await destinationService.deleteDestination(
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllDestinationsHandler,
    getDestinationHandler,
    createDestinationHandler,
    editDestinationHandler,
    deleteDestinationHandler,
};
