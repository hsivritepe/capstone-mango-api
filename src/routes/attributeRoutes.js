const router = require('express').Router();
const attributeControler = require('../controllers/attributeControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Attribute:
 *       type: object
 *       required:
 *         - attribute_name
 *         - ha_category_id
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the attribute
 *         attribute_name:
 *           type: string
 *           description: The name of the attribute
 *         ha_category_id:
 *           type: integer
 *           description: The id of the home attribute category
 *       example:
 *         id: 1
 *         attribute_name: "Wifi"
 *         ha_category_id: 1
 */

/**
 * @swagger
 * tags:
 *   name: Attributes
 *   description: The home attributes managing API
 */

/**
 * @swagger
 * /api/v1/homeattributes:
 *   get:
 *     summary: Returns the list of all the attributes
 *     tags:
 *       - Attributes
 *     responses:
 *       200:
 *         description: The list of the attributes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attribute'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * /api/v1/homeattributes:
 *   post:
 *     summary: Create a new attribute
 *     tags:
 *       - Attributes
 *     requestBody:
 *       description: The attribute to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attribute'
 *     responses:
 *       201:
 *         description: The attribute was successfully created
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attribute'
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/homeattributes/{id}:
 *   get:
 *     summary: Get the attribute by id
 *     tags:
 *       - Attributes
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           required: true
 *           description: The attribute id
 *     responses:
 *       200:
 *         description: The attribute description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attribute'
 *       404:
 *         description: The attribute was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/homeattributes/{id}:
 *   delete:
 *     summary: Remove the attribute by id
 *     tags:
 *       - Attributes
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           require: true
 *           description: The attribute id
 *     responses:
 *       204:
 *         description: The attribute was deleted
 *       404:
 *         description: The attribute was not found
 *       500:
 *         description: Some error happened
 */

router
    .route('/')
    .get(attributeControler.getAllAttributesHandler)
    .post(attributeControler.addAttributeHandler);

router
    .route('/:id')
    .get(attributeControler.getAttributeHandler)
    .delete(attributeControler.deleteAttributeHandler);

module.exports = router;
