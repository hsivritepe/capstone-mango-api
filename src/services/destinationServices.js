require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);
const {
    createDestinationSchema,
    editDestinationSchema,
} = require('../helpers/validationSchemas');

const getAllDestinations = async () => {
    try {
        const data = await knex('destinations');

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

const getDestination = async (id) => {
    try {
        const data = await knex('destinations').where('id', id);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The destination with id: ${id} could not be found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve destination ID ${id} : ${err}`,
            },
        };
    }
};

const createDestination = async (body) => {
    try {
        const result = await createDestinationSchema.validateAsync(
            body
        );
        const data = await knex('destinations').insert({
            destination_name: result.destination_name,
        });

        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `Destination '${result.destination_name}' added.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to add destination. ${err}`,
            },
        };
    }
};

const editDestination = async (id, body) => {
    try {
        const result = await editDestinationSchema.validateAsync(
            body
        );
        const data = await knex('destinations')
            .where('id', id)
            .update({
                destination_name: result.destination_name,
            });

        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Destination id ${id} not found.`,
                },
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `Destination id ${id} updated.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to update destination id ${id}. ${err}`,
            },
        };
    }
};

const deleteDestination = async (id) => {
    try {
        const data = await knex('destinations').where('id', id).del();

        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Destination id ${id} not found.`,
                },
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `Destination id ${id} deleted.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to delete destination id ${id}. ${err}`,
            },
        };
    }
};

module.exports = {
    getAllDestinations,
    getDestination,
    createDestination,
    editDestination,
    deleteDestination,
};
