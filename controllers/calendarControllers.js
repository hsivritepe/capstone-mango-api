require('dotenv').config();
const knex = require('knex')(
    require('../knexfile.js')[process.env.ENVIRONMENT]
);

// GET a single calendar
const getCalendar = (req, res) => {
    knex('calendars')
        .where({ home_id: req.params.id })
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `Calendar ID ${req.params.id} was not found.`,
                });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error: Unable to retrieve calendar ID ${req.params.id} : ${err}`,
            });
        });
};

// CREATE new calendar
const createCalendar = (req, res) => {
    if (!req.body.calendar_name) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new calendar failed.`,
        });
    }
    knex('calendars')
        .insert(req.body)
        .then((result) => {
            const id = result[0];
            res.status(201).json({ id, ...req.body });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Was not able to create the calendar. ${err}`,
            });
        });
};

// EDIT calendar
const editCalendar = (req, res) => {
    if (!req.body.calendar_name) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new calendar failed.`,
        });
    }
    knex('calendars')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            return knex('calendars')
                .where({ id: req.params.id })
                .then((updatedCalendar) => {
                    res.json(updatedCalendar[0]);
                })
                .catch((err) => {
                    res.status(500).json({
                        message: `Error: ${err}`,
                    });
                });
        });
};

// DELETE calendar
const deleteCalendar = (req, res) => {
    knex('calendars')
        .where({ id: req.params.id })
        .del()
        .then((result) => {
            if (result === 0) {
                return res.status(400).json({
                    message: `Calendar with ID : ${req.params.id} was not found.`,
                });
            }

            res.status(204).json({});
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Can not delete calendar. ${err}`,
            });
        });
};

module.exports = {
    getCalendar,
    createCalendar,
    editCalendar,
    deleteCalendar,
};
