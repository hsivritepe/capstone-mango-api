require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile.js')[process.env.ENVIRONMENT]
);
const {
    createBookingSchema,
    editBookingSchema,
} = require('../helpers/validationSchemas');

const getAllBookings = async () => {
    try {
        const data = await knex('bookings')
            .select('*', 'bookings.id as booking_id')
            .join('users', 'bookings.user_id', '=', 'users.id')
            .join(
                'contacts',
                'bookings.customer_contact_id',
                '=',
                'contacts.id'
            )
            .join('homes', 'bookings.home_id', '=', 'homes.id')
            .join(
                'destinations',
                'homes.destination_id',
                '=',
                'destinations.id'
            )
            .orderBy('bookings.id', 'desc');

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

const getBooking = async (id) => {
    try {
        const data = await knex.raw(
            'SELECT *, bookings.id as booking_id  FROM bookings JOIN homes ON homes.id=bookings.home_id JOIN contacts ON contacts.id=bookings.customer_contact_id WHERE bookings.id = ?',
            [id]
        );
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Booking ID ${id} was not found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Unable to retrieve booking ID ${id} : ${err}`,
            },
        };
    }
};

const createBooking = async (body) => {
    try {
        const result = await createBookingSchema.validateAsync(body);
        const data = await knex('bookings').insert(result);
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
                message: `Error: Was not able to create the booking. ${err}`,
            },
        };
    }
};

const editBooking = async (id, body) => {
    try {
        const result = await editBookingSchema.validateAsync(body);
        const data = await knex('bookings')
            .where({ id: id })
            .update(result);

        try {
            const newData = await knex('bookings').where({ id: id });
            return {
                status: 'success',
                statusCode: 200,
                json: {
                    message: `Booking with ID : ${id} was updated.`,
                    data: newData,
                },
            };
        } catch (err) {
            return {
                status: 'error',
                statusCode: 400,
                json: {
                    message: `Error: Was not able to gather the booking. ${err}`,
                },
            };
        }
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Was not able to update the booking. ${err}`,
            },
        };
    }
};

const deleteBooking = async (id) => {
    try {
        const data = await knex('bookings').where({ id: id }).del();

        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `Booking with ID : ${id} was not found.`,
                },
            };
        }

        return {
            status: 'success',
            statusCode: 204,
            json: {
                message: `Booking with ID : ${id} was deleted.`,
            },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 400,
            json: {
                message: `Error: Was not able to delete the booking. ${err}`,
            },
        };
    }
};

const recentBookings = async (req, res) => {
    try {
        const data = await knex('bookings')
            .select('*', 'bookings.id as booking_id')
            .join('users', 'bookings.user_id', '=', 'users.id')
            .join(
                'contacts',
                'bookings.customer_contact_id',
                '=',
                'contacts.id'
            )
            .join('homes', 'bookings.home_id', '=', 'homes.id')
            .join(
                'destinations',
                'homes.destination_id',
                '=',
                'destinations.id'
            )
            .orderBy('bookings.id', 'desc')
            .limit(5);

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

module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    editBooking,
    deleteBooking,
    recentBookings,
};
