const router = require('express').Router();
const destinationControllers = require('../controllers/destinationControllers');
const { route } = require('./bookingRoutes');

/**
 * @swagger
 * components:
 *   schemas:
 *     Destination:
 *       type: object
 *       required:
 *         - destiantion_name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the destination
 *         destination_name:
 *           type: string
 *           description: The destination name
 *       example:
 *         destination_name: New York
 */

/**
 * @swagger
 * tags:
 *   name: Destination
 *   description: The Destination managing API
 */

/**
 * @swagger
 * /api/v1/destinations:
 *   get:
 *     summary: Returns the list of all the destinations
 *     tags:
 *       - Destination
 *     responses:
 *       200:
 *         description: The list of the destinations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Destination'
 */

/**
 * @swagger
 * /api/v1/destinations:
 *   post:
 *     summary: Create a new destination
 *     tags: [Destination]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Destination'
 *     responses:
 *       200:
 *         description: The destination was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Destination'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/destinations/{id}:
 *  get:
 *    summary: Get the destination by id
 *    tags: [Destination]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Destination id
 *    responses:
 *      200:
 *        description: The destination description by id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Destination'
 *      404:
 *        description: The destination was not found
 */

/**
 * @swagger
 * /api/v1/destinations/{id}:
 *  put:
 *    summary: Update the destination by the id
 *    tags: [Destination]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Destination id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/Destination'
 *    responses:
 *      200:
 *        description: The destination was updated
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Destination'
 *      404:
 *        description: The destination was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /api/v1/destinations/{id}:
 *  delete:
 *    summary: Remove the destination by id
 *    tags: [Destination]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Destination id
 *    responses:
 *      200:
 *        description: The destination was deleted
 *      404:
 *        description: The destination was not found
 */

router
    .route('/')
    .get(destinationControllers.getAllDestinationsHandler)
    .post(destinationControllers.createDestinationHandler);

router
    .route('/:id')
    .get(destinationControllers.getDestinationHandler)
    .put(destinationControllers.editDestinationHandler)
    .delete(destinationControllers.deleteDestinationHandler);

module.exports = router;
