const router = require('express').Router();
const contactControllers = require('../controllers/contactControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the contact
 *         first_name:
 *           type: string
 *           description: The first name of the contact
 *         last_name:
 *           type: string
 *           description: The last name of the contact
 *         email:
 *           type: string
 *           description: The email of the contact
 *         phone:
 *           type: string
 *           description: The phone number of the contact
 *       example:
 *         first_name: John
 *         last_name: Doe
 *         email: john@doe.com
 *         phone: "5552345421"
 */

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: The contacts managing API
 */

/**
 * @swagger
 * /api/v1/contacts:
 *   get:
 *     summary: Returns the list of all the contacts
 *     tags:
 *       - Contacts
 *     responses:
 *       200:
 *         description: The list of the contacts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/contacts:
 *   post:
 *     summary: Creates a new contact
 *     tags:
 *       - Contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Contact'
 *     responses:
 *       200:
 *         description: The contact was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/contacts/{id}:
 *   get:
 *     summary: Get the contact by id
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The contact description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       404:
 *         description: The contact was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/contacts/{id}:
 *  delete:
 *    summary: Remove the contact by id
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: The contact was deleted
 *      404:
 *        description: The contact was not found
 */

/**
 * @swagger
 * /api/v1/contacts/{id}:
 *   put:
 *     summary: Update the contact by the id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Contact'
 *     responses:
 *       200:
 *         description: The contact was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Some error happened
 */

router
    .route('/')
    .get(contactControllers.getAllContactsHandler)
    .post(contactControllers.createContactHandler);
router
    .route('/:id')
    .get(contactControllers.getContactHandler)
    .put(contactControllers.editContactHandler)
    .delete(contactControllers.deleteContactHandler);

module.exports = router;
