require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);

const getAllHomeattCategories = async () => {
    try {
        const data = await knex('homeatt_categories');

        return { status: 'success', statusCode: 200, json: data };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `The data you are looking for could not be found. ${err}`,
            },
        };
    }
};

const addHomeattCategory = async (body) => {
    try {
        const data = await knex('homeatt_categories').insert({
            ha_category_name: body.ha_category_name,
        });

        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `homeattCategory '${body.ha_category_name}' added.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to add homeattCategory. ${err}`,
            },
        };
    }
};

const editHomeattCategory = async (id, body) => {
    try {
        const data = await knex('homeatt_categories')
            .where('id', id)
            .update({
                ha_category_name: body.ha_category_name,
            });

        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `homeattCategory id ${id} not found.`,
                },
            };
        }

        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `homeattCategory id ${id} updated.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to update homeattCategory id ${id}. ${err}`,
            },
        };
    }
};

const deleteHomeattCategory = async (id) => {
    try {
        const data = await knex('homeatt_categories')
            .where('id', id)
            .del();

        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `homeattCategory id ${id} not found.`,
                },
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `homeattCategory id ${id} deleted.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to delete homeattCategory id ${id}. ${err}`,
            },
        };
    }
};

module.exports = {
    getAllHomeattCategories,
    addHomeattCategory,
    editHomeattCategory,
    deleteHomeattCategory,
};
