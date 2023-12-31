require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);
const {
    createUserSchema,
    editUserSchema,
} = require('../helpers/validationSchemas');

const getAllUsers = async () => {
    try {
        const data = await knex('users');
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

const getUser = async (id) => {
    try {
        const data = await knex('users').where('id', id);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The user with id: ${id} could not be found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to retrieve user ID ${id} : ${err}`,
            },
        };
    }
};

const createUser = async (body) => {
    try {
        const result = await createUserSchema.validateAsync(body);
        const data = await knex('users').insert(result);
        const id = data[0];
        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...result },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: `Error: Was not able to create the user. ${err}`,
            },
        };
    }
};

const editUser = async (id, body) => {
    try {
        const result = await editUserSchema.validateAsync(body);
        const data = await knex('users')
            .where('id', id)
            .update(result);
        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The user with id: ${id} could not be found.`,
                },
            };
        }

        try {
            const updated = await knex('users').where('id', id);
            return {
                status: 'success',
                statusCode: 200,
                json: updated[0],
            };
        } catch (err) {
            return {
                status: 'error',
                statusCode: 400,
                json: {
                    message: `Error: Unable to retrieve user ID ${id} : ${err}`,
                },
            };
        }
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to edit user ID ${id} : ${err}`,
            },
        };
    }
};

const deleteUser = async (id) => {
    try {
        const data = await knex('users').where('id', id).del();
        if (!data) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The user with id: ${id} could not be found.`,
                },
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            json: { message: `User ID ${id} was deleted.` },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to delete user ID ${id} : ${err}`,
            },
        };
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    editUser,
    deleteUser,
};
