const router = require('express').Router();
const bookingControler = require('../controllers/bookingControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - user_id
 *         - home_id
 *         - customer_contact_id
 *         - booking_status
 *         - check_in
 *         - check_out
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the booking
 *         user_id:
 *           type: integer
 *           description: The id of the user
 *         home_id:
 *           type: integer
 *           description: The id of the home
 *         customer_contact_id:
 *           type: integer
 *           description: The id of the customer contact
 *         booking_status:
 *           type: string
 *           description: The status of the booking
 *         check_in:
 *           type: date
 *           description: The check-in date
 *         check_out:
 *           type: date
 *           description: The check-out date
 *       example:
 *         id: 1
 *         user_id: 1
 *         home_id: 1
 *         customer_contact_id: 1
 *         booking_status: "active"
 *         check_in: "2021-01-01"
 *         check_out: "2021-01-05"
 */

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: The bookings managing API
 */

/**
 * @swagger
 * /api/v1/bookings:
 *   get:
 *     summary: Returns the list of all the bookings
 *     tags:
 *       - Bookings
 *     responses:
 *       200:
 *         description: The list of the bookings
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * /api/v1/bookings/recent:
 *   get:
 *     summary: Returns the list of recent bookings
 *     tags:
 *       - Bookings
 *     responses:
 *       200:
 *         description: The list of the recent bookings
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * /api/v1/bookings/{id}:
 *   get:
 *     summary: Get the booking by id
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric id of the booking to get
 *     responses:
 *       200:
 *         description: The booking description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: The booking was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags:
 *       - Bookings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       200:
 *         description: The booking was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/bookings/{id}:
 *   put:
 *     summary: Update the booking by the id
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric id of the booking to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       200:
 *         description: The booking was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: The booking was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/bookings/{id}:
 *   delete:
 *     summary: Remove the booking by id
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric id of the booking to delete
 *     responses:
 *       200:
 *         description: The booking was deleted
 *       404:
 *         description: The booking was not found
 *       500:
 *         description: Some error happened
 */

router.get('/recent', bookingControler.recentBookingsHandler);
router
    .route('/')
    .get(bookingControler.getAllBookingsHandler)
    .post(bookingControler.createBookingHandler);
router
    .route('/:id')
    .get(bookingControler.getBookingHandler)
    .put(bookingControler.editBookingHandler)
    .delete(bookingControler.deleteBookingHandler);

module.exports = router;
