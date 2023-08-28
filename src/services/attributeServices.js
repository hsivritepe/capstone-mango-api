require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);

const getAllAttributes = async () => {
    try {
        const data = await knex('attributes')
            .select('*', 'attributes.id')
            .join(
                'homeatt_categories',
                'attributes.ha_category_id',
                '=',
                'homeatt_categories.id'
            );

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

const getAttribute = async (id) => {
    try {
        const data = await knex('attributes').where('id', id);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The attribute with id: ${id} could not be found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to retrieve attribute ID ${id} : ${err}`,
            },
        };
    }
};

const addAttribute = async (body) => {
    try {
        const data = await knex('attributes').insert({
            attribute_name: body.attribute_name,
            ha_category_id: body.ha_category_id,
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `Attribute '${body.attribute_name}' added.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to create attribute. ${err}`,
            },
        };
    }
};

const deleteAttribute = async (id) => {
    try {
        const data = await knex('attributes').where('id', id).del();
        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Attribute ID ${id} was not found.`,
                },
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `Attribute ID ${id} deleted.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to delete attribute ID ${id} : ${err}`,
            },
        };
    }
};

module.exports = {
    getAllAttributes,
    getAttribute,
    addAttribute,
    deleteAttribute,
};
