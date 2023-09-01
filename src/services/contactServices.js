require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);

const {
    createContactSchema,
    editContactSchema,
} = require('../helpers/validationSchemas');

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
    try {
        const result = await createContactSchema.validateAsync(body);
        const data = await knex('contacts').insert(result);
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
            json: { id, ...result },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve contact ${err}`,
            },
        };
    }
};

// EDIT contact
const editContact = async (id, body) => {
    try {
        const result = await editContactSchema.validateAsync(body);
        const data = await knex('contacts')
            .where('id', id)
            .update(result);
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
            json: { id, ...result },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve contact ${err}`,
            },
        };
    }
};

// DELETE contact
const deleteContact = async (id) => {
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
        const data = await knex('contacts').where('id', id).del();
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
                message: `Error: Unable to delete contact id ${id}. ${err}`,
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
