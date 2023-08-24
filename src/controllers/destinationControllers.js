require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);

// GET all destinations
const getAllDestinations = (req, res) => {
    knex('destinations')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET a single destination
const getDestination = (req, res) => {
    knex('destinations')
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `Destination ID ${req.params.id} was not found.`,
                });
            }
            res.status(200).json(data[0]);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error: Unable to retrieve destination ID ${req.params.id} : ${err}`,
            });
        });
};

// CREATE new destination
const createDestination = (req, res) => {
    if (!req.body.destination_name) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new destination failed.`,
        });
    }
    knex('destinations')
        .insert(req.body)
        .then((result) => {
            const id = result[0];
            res.status(201).json({ id, ...req.body });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Was not able to create the destination. ${err}`,
            });
        });
};

// EDIT destination
const editDestination = (req, res) => {
    if (!req.body.destination_name) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new destination failed.`,
        });
    }
    knex('destinations')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            return knex('destinations')
                .where({ id: req.params.id })
                .then((updatedDestination) => {
                    res.json(updatedDestination[0]);
                })
                .catch((err) => {
                    res.status(500).json({
                        message: `Error: ${err}`,
                    });
                });
        });
};

// DELETE destination
const deleteDestination = (req, res) => {
    knex('destinations')
        .where({ id: req.params.id })
        .del()
        .then((result) => {
            if (result === 0) {
                return res.status(400).json({
                    message: `Destination with ID : ${req.params.id} was not found.`,
                });
            }

            res.status(204).json({});
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Can not delete destination. ${err}`,
            });
        });
};

module.exports = {
    getAllDestinations,
    getDestination,
    createDestination,
    editDestination,
    deleteDestination,
};
