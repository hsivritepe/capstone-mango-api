require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);

// GET all homeattCategories
const getAllHomeattCategories = (req, res) => {
    knex('homeatt_categories')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

// ADD new homeattCategory
const addHomeattCategory = (req, res) => {
    knex('homeatt_categories')
        .insert({
            ha_category_name: req.body.ha_category_name,
        })
        .then(() => {
            res.status(200).json({
                message: `homeattCategory '${req.body.ha_category_name}' added.`,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to add homeattCategory. ${err}`,
            });
        });
};

// EDIT homeattCategory
const editHomeattCategory = (req, res) => {
    knex('homeatt_categories')
        .where('id', req.params.id)
        .update({
            ha_category_name: req.body.ha_category_name,
        })
        .then(() => {
            res.status(200).json({
                message: `homeattCategory id ${req.params.id} updated.`,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to update homeattCategory id ${req.params.id}. ${err}`,
            });
        });
};

// DELETE homeattCategory
const deleteHomeattCategory = (req, res) => {
    knex('homeatt_categories')
        .where('id', req.params.id)
        .del()
        .then(() => {
            res.status(200).json({
                message: `homeattCategory id ${req.params.id} deleted.`,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: `Error: Unable to delete homeattCategory id ${req.params.id}. ${err}`,
            });
        });
};

module.exports = {
    getAllHomeattCategories,
    addHomeattCategory,
    editHomeattCategory,
    deleteHomeattCategory,
};
