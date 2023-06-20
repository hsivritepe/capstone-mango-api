require('dotenv').config();
const knex = require('knex')(
    require('../knexfile.js')[process.env.ENVIRONMENT]
);

// GET all bookings
const getAllBookings = (req, res) => {
    knex('bookings')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET a single booking
const getBooking = (req, res) => {
    knex('bookings')
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `Booking ID ${req.params.id} was not found.`,
                });
            }
            res.status(200).json(data[0]);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error: Unable to retrieve booking ID ${req.params.id} : ${err}`,
            });
        });
};

// CREATE new booking
const createBooking = (req, res) => {
    if (
        !req.body.user_id ||
        !req.body.home_id ||
        !req.body.customer_contact_id ||
        !req.body.check_in ||
        !req.body.check_out
    ) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new booking failed.`,
        });
    }
    knex('bookings')
        .insert(req.body)
        .then((result) => {
            const id = result[0];
            res.status(201).json({ id, ...req.body });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Was not able to create the booking. ${err}`,
            });
        });
};

// EDIT booking
const editBooking = (req, res) => {
    if (
        !req.body.user_id ||
        !req.body.home_id ||
        !req.body.customer_contact_id ||
        !req.body.booking_owner ||
        !req.body.check_in ||
        !req.body.check_out
    ) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new booking failed.`,
        });
    }
    knex('bookings')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            return knex('bookings')
                .where({ id: req.params.id })
                .then((updatedBooking) => {
                    res.json(updatedBooking[0]);
                })
                .catch((err) => {
                    res.status(500).json({
                        message: `Error: ${err}`,
                    });
                });
        });
};

// DELETE booking
const deleteBooking = (req, res) => {
    knex('bookings')
        .where({ id: req.params.id })
        .del()
        .then((result) => {
            if (result === 0) {
                return res.status(400).json({
                    message: `Booking with ID : ${req.params.id} was not found.`,
                });
            }

            res.status(204).json({});
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: ${err}`,
            });
        });
};

module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    editBooking,
    deleteBooking,
};
