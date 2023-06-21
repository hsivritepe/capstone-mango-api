require('dotenv').config();
const knex = require('knex')(
    require('../knexfile')[process.env.ENVIRONMENT]
);

// GET all homeatts for a home
const getAllHomeattsForHome = (req, res) => {
    knex('homeatts')
        .select(
            'homeatts.id',
            'homeatts.home_id',
            'homes.home_vs_name',
            'homeatts.attribute_id',
            'homeatts.homeatts_value',
            'homeatt_categories.ha_category_name',
            'attributes.attribute_name'
        )
        .join(
            'attributes',
            'homeatts.attribute_id',
            '=',
            'attributes.id'
        )
        .join(
            'homeatt_categories',
            'attributes.ha_category_id',
            '=',
            'homeatt_categories.id'
        )
        .join('homes', 'homeatts.home_id', '=', 'homes.id')
        .where({ home_id: req.params.homeId })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET one homeatt for home
const getHomeattForHome = (req, res) => {
    knex('homeatts')
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

// LINK an attribute to Home
const linkAttributeToHome = (req, res) => {
    if (
        !req.params.homeId ||
        !req.params.id ||
        !req.body.ha_category_id
    ) {
        return res.status(400).json({
            message: 'Please enter all required fields.',
        });
    }
    const newData = {
        home_id: req.params.homeId,
        attribute_id: req.params.id,
        ...req.body,
    };
    knex('homeatts')
        .insert(newData)
        .then((data) => {
            const id = data[0];
            res.status(201).json({ id, ...newData });
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: Can not create the home, ${err.message}`,
            });
        });
};

// UNLINK an attribute from Home
const unlinkAttributeForHome = (req, res) => {
    knex('homeatts')
        .where({
            attribute_id: req.params.id,
            home_id: req.params.homeId,
        })
        .del()
        .then((result) => {
            if (result === 0) {
                return res.status(400).json({
                    message: `Home ID ${req.params.homeId} do not have an Attribute with ID : ${req.params.id}.`,
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
    getAllHomeattsForHome,
    getHomeattForHome,
    linkAttributeToHome,
    unlinkAttributeForHome,
};
