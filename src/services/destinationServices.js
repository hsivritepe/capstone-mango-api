require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);

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
    if (!body.destination_name) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Please make sure to provide all information in your request, creating new destination failed.`,
            },
        };
    }
    try {
        const data = await knex('destinations').insert({
            destination_name: body.destination_name,
        });

        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: `Destination '${body.destination_name}' added.`,
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
    if (!body.destination_name) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Please make sure to provide all information in your request, editing destination failed.`,
            },
        };
    }
    try {
        const data = await knex('destinations')
            .where('id', id)
            .update({
                destination_name: body.destination_name,
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
