require('dotenv').config();
console.log(process.env);
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);

const getAllHomes = async () => {
    try {
        const data = await knex('homes')
            .select(
                'homes.id',
                'homes.home_vs_name',
                'homes.home_real_name',
                'homes.destination_id',
                'homes.ho_contact_id',
                'destinations.destination_name',
                'contacts.first_name',
                'contacts.last_name'
            )
            .join(
                'destinations',
                'homes.destination_id',
                '=',
                'destinations.id'
            )
            .join(
                'contacts',
                'homes.ho_contact_id',
                '=',
                'contacts.id'
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

const getHome = async (id) => {
    try {
        const data = await knex('homes').where('id', id);
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The home with id: ${id} could not be found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve home id ${id}. ${err}`,
            },
        };
    }
};

const createHome = async (body) => {
    if (
        !body.home_vs_name ||
        !body.home_real_name ||
        !body.destination_id
    ) {
        return {
            status: 'error',
            statusCode: 400,
            json: 'Please enter all required fields.',
        };
    }

    try {
        const data = await knex('homes').insert(body);
        const id = data[0];
        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...body },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: `Error: Can not create the home, ${err.message}`,
            },
        };
    }
};

const editHome = async (id, body) => {
    if (!body.home_vs_name || !body.home_real_name) {
        return {
            status: 'error',
            statusCode: 400,
            json: { message: 'Please enter all required fields.' },
        };
    }

    try {
        const data = await knex('homes')
            .where({ id: id })
            .update(body);

        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Home with the ID : ${id} was not able to update.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: `Error: Home with the ID : ${id} was not able to update.`,
            },
        };
    }
};

const deleteHome = async (id) => {
    try {
        const data = await knex('homes').where({ id: id }).del();

        if (data === 0) {
            return {
                status: 'error',
                statusCode: 400,
                json: {
                    message: `Error: Home with this id ${id} was not found to delete.`,
                },
            };
        }
        return { status: 'success', statusCode: 204, json: {} };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: `Error: Unable to delete the home. ${err}`,
            },
        };
    }
};

module.exports = {
    getAllHomes,
    getHome,
    createHome,
    editHome,
    deleteHome,
};
