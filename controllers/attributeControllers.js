require('dotenv').config();
const knex = require('knex')(
    require('../knexfile')[process.env.ENVIRONMENT]
);

// GET all attributes
const getAllAttributes = (req, res) => {
    knex('attributes')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
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
