const router = require('express').Router();
const homeBookingController = require('../controllers/homeBookingControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     HomeBooking:
 *       type: object
 *       required:
 *         - user_id
 *         - home_id
 *         - customer_contact_id
 *         - booking_owner
 *         - booking_status
 *         - check_in
 *         - check_out
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the home booking
 *         user_id:
 *           type: integer
 *           description: The user id
 *         home_id:
 *           type: integer
 *           description: The home id
 *         customer_contact_id:
 *           type: integer
 *           description: The customer contact id
 *         booking_owner:
 *           type: string
 *           description: The booking owner info
 *         booking_status:
 *           type: string
 *           description: The booking status
 *         check_in:
 *           type: string
 *           description: The booking date
 *         check_out:
 *           type: string
 *           description: The booking time
 *       example:
 *         user_id: 1
 *         home_id: 1
 *         customer_contact_id: 1
 *         booking_owner: John Doe
 *         booking_status: pending
 *         check_in: 2020-01-01
 *         check_out: 10:00
 */

/**
 * @swagger
 * tags:
 *   name: HomeBooking
 *   description: The HomeBooking managing API
 */

/**
 * @swagger
 * /api/v1/homes/{id}/bookings:
 *   get:
 *     summary: Returns the list of all the home bookings
 *     tags:
 *       - HomeBooking
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *     responses:
 *       200:
 *         description: The list of the home bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/HomeBooking'
 */
router
    .route('/:homeId/bookings')
    .get(homeBookingController.getAllBookingsForHomeHandler);

module.exports = router;
