require('dotenv').config();
const knex = require('knex')(
    require('../knexfile.js')[process.env.ENVIRONMENT]
);

// GET all users
const getAllUsers = (req, res) => {
    knex('users')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET a single user
const getUser = (req, res) => {
    knex('users')
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `User ID ${req.params.id} was not found.`,
                });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error: Unable to retrieve user ID ${req.params.id} : ${err}`,
            });
        });
};

// CREATE new user
const createUser = (req, res) => {
    if (
        !req.body.username ||
        !req.body.password ||
        !req.body.email ||
        !req.body.is_admin ||
        !req.body.first_name ||
        !req.body.last_name
    ) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new user failed.`,
        });
    }
    knex('users')
        .insert(req.body)
        .then((result) => {
            const id = result[0];
            res.status(201).json({ id, ...req.body });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Was not able to create the user. ${err}`,
            });
        });
};

// EDIT user
const editUser = (req, res) => {
    if (
        !req.body.username ||
        !req.body.password ||
        !req.body.email ||
        !req.body.is_admin ||
        !req.body.first_name ||
        !req.body.last_name
    ) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new user failed.`,
        });
    }
    knex('users')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            return knex('users')
                .where({ id: req.params.id })
                .then((updatedUser) => {
                    res.json(updatedUser[0]);
                })
                .catch((err) => {
                    res.status(500).json({
                        message: `Error: ${err}`,
                    });
                });
        });
};

// DELETE user
const deleteUser = (req, res) => {
    knex('users')
        .where({ id: req.params.id })
        .del()
        .then((result) => {
            if (result === 0) {
                return res.status(400).json({
                    message: `User with ID : ${req.params.id} was not found.`,
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
    getAllUsers,
    getUser,
    createUser,
    editUser,
    deleteUser,
};
