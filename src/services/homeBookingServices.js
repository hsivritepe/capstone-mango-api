require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);

const getAllBookingsForHome = async (homeId) => {
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
            .where('bookings.home_id', homeId)
            .orderBy('bookings.id', 'desc');

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

module.exports = {
    getAllBookingsForHome,
};
