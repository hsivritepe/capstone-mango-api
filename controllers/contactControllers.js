require('dotenv').config();
const knex = require('knex')(
    require('../knexfile.js')[process.env.ENVIRONMENT]
);

// GET all contacts
const getAllContacts = (req, res) => {
    knex('contacts')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET a single contact
const getContact = (req, res) => {
    knex('contacts')
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `Contact ID ${req.params.id} was not found.`,
                });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error: Unable to retrieve contact ID ${req.params.id} : ${err}`,
            });
        });
};

// CREATE new contact
const createContact = (req, res) => {
    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.email
    ) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new contact failed.`,
        });
    }
    knex('contacts')
        .insert(req.body)
        .then((result) => {
            const id = result[0];
            res.status(201).json({ id, ...req.body });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Was not able to create the contact. ${err}`,
            });
        });
};

// EDIT contact
const editContact = (req, res) => {
    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.email ||
        !req.body.phone
    ) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new contact failed.`,
        });
    }
    knex('contacts')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            return knex('contacts')
                .where({ id: req.params.id })
                .then((updatedContact) => {
                    res.json(updatedContact[0]);
                })
                .catch((err) => {
                    res.status(500).json({
                        message: `Error: ${err}`,
                    });
                });
        });
};

// DELETE contact
const deleteContact = (req, res) => {
    knex('contacts')
        .where({ id: req.params.id })
        .del()
        .then((result) => {
            if (result === 0) {
                return res.status(400).json({
                    message: `Contact with ID : ${req.params.id} was not found.`,
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
    getAllContacts,
    getContact,
    createContact,
    editContact,
    deleteContact,
};
