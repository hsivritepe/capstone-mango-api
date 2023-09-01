const router = require('express').Router();
const calendarControler = require('../controllers/calendarControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Calendar:
 *       type: object
 *       required:
 *         - home_id
 *         - date
 *         - date_ava
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the calendar
 *         home_id:
 *           type: integer
 *           description: The id of the home
 *         date:
 *           type: date
 *           description: The date of the calendar
 *         date_ava:
 *           type: integer
 *           description: The availability of the calendar
 *         price:
 *           type: integer
 *           description: The status of the calendar
 *       example:
 *         home_id: 1
 *         date: "2021-01-01"
 *         date_ava: 1
 *         price: 100
 */

/**
 * @swagger
 * tags:
 *   name: Calendars
 *   description: The calendars managing API
 */

/**
 * @swagger
 * /api/v1/calendars:
 *   get:
 *     summary: Returns the list of all the calendars
 *     tags:
 *       - Calendars
 *     responses:
 *       200:
 *         description: The list of the calendars
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calendar'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * /api/v1/calendars/{id}:
 *   get:
 *     summary: Get the calendar by id
 *     tags:
 *       - Calendars
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The calendar description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calendar'
 *       404:
 *         description: The calendar was not found
 *       500:
 *         description: Some error happened
 *
 */

/**
 * @swagger
 * /api/v1/calendars:
 *   post:
 *     summary: Create a new calendar
 *     tags:
 *       - Calendars
 *     requestBody:
 *       description: The calendar to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calendar'
 *     responses:
 *       201:
 *         description: The calendar was successfully created
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calendar'
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/calendars/{id}:
 *   delete:
 *     summary: Remove the calendar by id
 *     tags:
 *       - Calendars
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: The calendar was deleted
 *       404:
 *         description: The calendar was not found
 *       500:
 *         description: Some error happened
 *
 */

router.route('/').post(calendarControler.createCalendarHandler);
router
    .route('/:id')
    .get(calendarControler.getCalendarHandler)
    .put(calendarControler.editCalendarHandler)
    .delete(calendarControler.deleteCalendarHandler);

module.exports = router;
