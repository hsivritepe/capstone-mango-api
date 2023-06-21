require('dotenv').config();
const knex = require('knex')(
    require('../knexfile')[process.env.ENVIRONMENT]
);

// GET all attributes
const getAllAttributes = (req, res) => {
    knex('attributes')
        .select(
            'attributes.id',
            'attributes.attribute_name',
            'homeatt_categories.ha_category_name',
            'homeatt_categories.id as ha_category_id',
            'homeatt_categories.ha_category_name'
        )
        .join(
            'homeatt_categories',
            'attributes.ha_category_id',
            '=',
            'homeatt_categories.id'
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// GET one attribute
const getAttribute = (req, res) => {
    knex('attributes')
        .where('id', req.params.id)
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    message: `The attribute with id: ${req.params.id} could not be found.`,
                });
            }
            res.status(200).json(data[0]);
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to retrieve attribute id ${req.params.id}. ${err}`,
            });
        });
};

// ADD new attribute
const addAttribute = (req, res) => {
    knex('attributes')
        .insert({
            attribute_name: req.body.attribute_name,
        })
        .then(() => {
            res.status(200).json({
                message: `Attribute '${req.body.attribute_name}' added.`,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to add attribute. ${err}`,
            });
        });
};

// DELETE attribute
const deleteAttribute = (req, res) => {
    knex('attributes')
        .where('id', req.params.id)
        .del()
        .then(() => {
            res.status(200).json({ message: `Attribute deleted.` });
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to delete attribute. ${err}`,
            });
        });
};

module.exports = {
    getAllAttributes,
    getAttribute,
    addAttribute,
    deleteAttribute,
};
