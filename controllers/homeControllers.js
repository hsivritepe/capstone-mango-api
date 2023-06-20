require('dotenv').config();
const knex = require('knex')(
    require('../knexfile')[process.env.ENVIRONMENT]
);

// GET all homes
const getAllHomes = (req, res) => {
    knex('homes')
        .select(
            'homes.id',
            'homes.home_vs_name',
            'homes.home_real_name',
            'homes.destination_id',
            'homes.ho_contact_id',
            'destinations.destination_name',
            'contacts.first_name',
            'contacts.last_name'
        )
        .join(
            'destinations',
            'homes.destination_id',
            '=',
            'destinations.id'
        )
        .join('contacts', 'homes.ho_contact_id', '=', 'contacts.id')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET one home
const getHome = (req, res) => {
    knex('homes')
        .where('id', req.params.id)
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `The home with id: ${req.params.id} could not be found.`,
                });
            }
            res.status(200).json(data[0]);
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to retrieve home id ${req.params.id}. ${err}`,
            });
        });
};

// CREATE new home
const createHome = (req, res) => {
    if (
        !req.body.home_vs_name ||
        !req.body.home_real_name ||
        !req.body.destination_id
    ) {
        return res.status(400).json({
            message: 'Please enter all required fields.',
        });
    }
    knex('homes')
        .insert(req.body)
        .then((data) => {
            const id = data[0];
            res.status(201).json({ id, ...req.body });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Can not create the home, ${err.message}`,
            });
        });
};

// EDIT home
const editHome = (req, res) => {
    if (!req.body.home_vs_name || !req.body.home_real_name) {
        return res.status(400).json({
            message: 'Please enter all required fields.',
        });
    }
    knex('homes')
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            return knex('homes').where({ id: req.params.id });
        })
        .then((updatedHome) => {
            res.json(updatedHome[0]);
        })
        .catch(() => {
            res.status(500).json({
                message: `Home with the ID : ${req.params.id} was not able to update.`,
            });
        });
};

// DELETE home
const deleteHome = (req, res) => {
    knex('homes')
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data === 0) {
                return res.status(400).json({
                    message: `Error: Home with this id ${req.params.id} was not found to delete.`,
                });
            }
            res.status(204).json({});
        })
        .catch((err) => {
            res.status(500).json({
                message: `Unable to delete the home. ${err}`,
            });
        });
};

module.exports = {
    getAllHomes,
    getHome,
    createHome,
    deleteHome,
    editHome,
};
