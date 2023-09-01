const router = require('express').Router();
const homeattController = require('../controllers/homeattControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Homeatt:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         home_id:
 *           type: integer
 *           description: The home id.
 *         attribute_id:
 *           type: integer
 *           description: The attribute id.
 *         homeatts_value:
 *           type: string
 *           description: The homeatts value.
 *       example:
 *         home_id: 1
 *         attribute_id: 1
 *         homeatts_value: 1
 */

/**
 * @swagger
 * tags:
 *   name: Homeatt
 *   description: The Homeatt managing API
 */

/**
 * @swagger
 * /api/v1/homes/{homeId}/homeatts:
 *   get:
 *     summary: Returns the list of all the homeatts
 *     tags:
 *       - Homeatt
 *     parameters:
 *       - in: path
 *         name: homeId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The list of the homeatts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Homeatt'
 *       404:
 *         description: The homeatts was not found
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/homes/{homeId}/homeatts/{id}:
 *   get:
 *     summary: Get the homeatts by id
 *     tags:
 *       - Homeatt
 *     parameters:
 *       - in: path
 *         name: homeId
 *         schema:
 *           type: integer
 *         required: true
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The homeatt description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Homeatt'
 *       404:
 *         description: The homeatt was not found
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/homes/{homeId}/homeatts/{id}:
 *   post:
 *     summary: Link attribute to home
 *     tags:
 *       - Homeatt
 *     parameters:
 *       - in: path
 *         name: homeId
 *         schema:
 *           type: integer
 *         required: true
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The homeatt created successfully
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Homeatt'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/homes/{homeId}/homeatts/{id}:
 *   delete:
 *     summary: Unlink attribute from home
 *     tags:
 *       - Homeatt
 *     parameters:
 *       - in: path
 *         name: homeId
 *         schema:
 *           type: integer
 *         required: true
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: The homeatt deleted successfully
 *       404:
 *         description: The homeatt was not found
 *       500:
 *         description: Some server error
 */

router
    .route('/:homeId/homeatts')
    .get(homeattController.getAllHomeattsForHomeHandler);
router
    .route('/:homeId/homeatts/:id')
    .get(homeattController.getHomeattForHomeHandler)
    .post(homeattController.linkAttributeToHomeHandler)
    .delete(homeattController.unlinkAttributeForHomeHandler);

module.exports = router;
