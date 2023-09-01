const router = require('express').Router();
const homeController = require('../controllers/homeControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Home:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         home_vs_name:
 *           type: string
 *           description: The home's VS name.
 *         home_real_name:
 *           type: string
 *           description: The home's REAL name.
 *         ho_contact_id:
 *           type: integer
 *           description: The home owner's contact ID.
 *         destination_id:
 *           type: integer
 *           description: The home's destination ID.
 *         is_open_for_sale:
 *           type: integer
 *           description: States if the house is open for renting.
 *       example:
 *         home_vs_name: Home 1
 *         home_real_name: Home Real 1
 *         ho_contact_id: 1
 *         destination_id: 1
 *         is_open_for_sale: 1
 */

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: The Home managing API
 */

/**
 * @swagger
 * /api/v1/homes:
 *  get:
 *    summary: Returns the list of all the homes
 *    tags:
 *      - Home
 *    responses:
 *      200:
 *        description: The list of the homes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/Home'
 */

/**
 * @swagger
 * /api/v1/homes:
 *   post:
 *     summary: Creates a new home
 *     tags:
 *       - Home
 *     requestBody:
 *       description: The home to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Home'
 *     responses:
 *       200:
 *         description: The created home
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Home'
 */

/**
 * @swagger
 * /api/v1/homes/{id}:
 *   get:
 *     summary: Get the home by id
 *     tags:
 *       - Home
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The home description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Home'
 *       404:
 *         description: The home was not found
 */

/**
 * @swagger
 * /api/v1/homes/{id}:
 *   put:
 *     summary: Update the home by the id
 *     tags:
 *       - Home
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       description: The home to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Home'
 *     responses:
 *       200:
 *         description: The home was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Home'
 *       404:
 *         description: The home was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/homes/{id}:
 *   delete:
 *     summary: Remove the home by id
 *     tags:
 *       - Home
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: The home was deleted
 *       404:
 *         description: The home was not found
 */

router
    .route('/')
    .get(homeController.getAllHomesHandler)
    .post(homeController.createHomeHandler);
router
    .route('/:id')
    .get(homeController.getHomeHandler)
    .put(homeController.editHomeHandler)
    .delete(homeController.deleteHomeHandler);

module.exports = router;
