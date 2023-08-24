require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);

// GET all homeatts for a home
const getAllBookingsForHome = (req, res) => {
    knex('bookings')
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
        .where('bookings.home_id', req.params.homeId)
        .orderBy('bookings.id', 'desc')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({
                message: `The data you are looking for could not be found. ${err}`,
            });
        });
};

module.exports = {
    getAllBookingsForHome,
};
