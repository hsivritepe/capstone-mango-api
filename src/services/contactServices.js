require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);

// GET all contacts
const getAllContacts = async () => {
    try {
        const data = await knex('contacts');

        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The data you are looking for could not be found.`,
                },
            };
        }
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

// GET a single contact
const getContact = async (id) => {
    if (!id) {
        return res.status(400).json({
            message: `Please make sure to provide all information in your request, creating new contact failed.`,
        });
    }

    try {
        const data = await knex('contacts').where('id', id);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The contact with id: ${id} could not be found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve contact ID ${id} : ${err}`,
            },
        };
    }
};

// CREATE new contact
const createContact = async (body) => {
    if (!body.first_name || !body.last_name || !body.email) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Please make sure to provide all information in your request, creating new contact failed.`,
            },
        };
    }

    try {
        const data = await knex('contacts').insert(body);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The contact with id: ${id} could not be found.`,
                },
            };
        }

        const id = data[0];
        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...body },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve contact ID ${id} : ${err}`,
            },
        };
    }
};

// EDIT contact
const editContact = async (id, body) => {
    if (
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.phone
    ) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Please make sure to provide all information in your request, creating new contact failed.`,
            },
        };
    }

    try {
        const data = await knex('contacts')
            .where('id', id)
            .update(body);
        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The contact with id: ${id} could not be found.`,
                },
            };
        }

        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...newData },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve contact ID ${id} : ${err}`,
            },
        };
    }
};

// DELETE contact
const deleteContact = async () => {
    if (!id) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Please make sure to provide all information in your request, creating new contact failed.`,
            },
        };
    }

    try {
        const data = await knex('contacts').where('id', id);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The contact with id: ${id} could not be found.`,
                },
            };
        }
        const id = data[0];

        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...data },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve contact ID ${id} : ${err}`,
            },
        };
    }
};

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    editContact,
    deleteContact,
};
