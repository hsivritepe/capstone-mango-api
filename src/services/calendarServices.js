require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);

// GET all calendars
const getCalendar = async (homeId) => {
    try {
        const data = await knex('calendars').where({
            home_id: homeId,
        });

        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Calendar ID ${homeId} was not found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to retrieve calendar ID ${homeId} : ${err}`,
            },
        };
    }
};

const createCalendar = async (body) => {
    try {
        const data = await knex('calendars').insert(body);
        const id = data[0];

        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...body },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Was not able to create the calendar. ${err}`,
            },
        };
    }
};

const editCalendar = async (id, body) => {
    try {
        const data = await knex('calendars')
            .where({ id: id })
            .update(body);

        return { status: 'success', statusCode: 201, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to edit calendar ID ${id} : ${err}`,
            },
        };
    }
};

const deleteCalendar = async (id) => {
    try {
        const data = await knex('calendars').where({ id: id }).del();

        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Calendar ID ${id} was not found.`,
                },
            };
        }

        return { status: 'success', statusCode: 204, json: {} };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to delete calendar ID ${id} : ${err}`,
            },
        };
    }
};

module.exports = {
    getCalendar,
    createCalendar,
    editCalendar,
    deleteCalendar,
};
