const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         username:
 *           type: string
 *           description: The user's name.
 *         password:
 *           type: string
 *           description: The user's password.
 *         email:
 *           type: string
 *           description: The user's email.
 *         is_admin:
 *           type: in
 *           description: The user's admin role.
 *         first_name:
 *           type: string
 *           description: The user's first name.
 *         last_name:
 *           type: string
 *           description: The user's last name.
 *       example:
 *         username: John Doe
 *         password: 123456
 *         email: john@doe.com
 *         is_admin: 1
 *         first_name: John
 *         last_name: Doe
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing API
 */

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: Returns the list of all the users
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: The list of the users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/User'
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User's id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Creates a new user
 *     tags:
 *       - User
 *     requestBody:
 *       description: The user to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Updates the user by the id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User's id
 *     requestBody:
 *       description: The user to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/User'
 *     responses:
 *       200:
 *         description: The updated user
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Deletes the user by the id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User's id
 *     responses:
 *       200:
 *         description: The deleted user
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */

router
    .route('/')
    .get(userControllers.getAllUsersHandler)
    .post(userControllers.createUserHandler);
router
    .route('/:id')
    .get(userControllers.getUserHandler)
    .put(userControllers.editUserHandler)
    .delete(userControllers.deleteUserHandler);

module.exports = router;
