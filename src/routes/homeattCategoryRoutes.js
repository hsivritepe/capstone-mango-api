const router = require('express').Router();
const homeattCategoryController = require('../controllers/homeattCategoryControllers');

/**
 * @swagger
 * components:
 *  schemas:
 *     HomeattCategory:
 *       type: object
 *       required:
 *         - ha_category_name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the homeatt category
 *         category_name:
 *           type: string
 *           description: The homeatt category name
 *       example:
 *         ha_category_name: Home Appliances
 */

/**
 * @swagger
 * tags:
 *   name: HomeattCategory
 *   description: The HomeattCategory managing API
 */

/**
 * @swagger
 * /api/v1/homeattCategories:
 *   get:
 *     summary: Returns the list of all the homeatt categories
 *     tags: [HomeattCategory]
 *     responses:
 *       200:
 *         description: The list of the homeatt categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/HomeattCategory'
 */

/**
 * @swagger
 * /api/v1/homeattCategories:
 *   post:
 *     summary: Create a new homeatt category
 *     tags: [HomeattCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/HomeattCategory'
 *     responses:
 *       200:
 *         description: The homeatt category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/HomeattCategory'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/homeattCategories/{id}:
 *   put:
 *     summary: Update the homeatt category by the id
 *     tags: [HomeattCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Homeatt category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/HomeattCategory'
 *     responses:
 *       200:
 *         description: The homeatt category was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/HomeattCategory'
 *       404:
 *         description: The homeatt category was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the homeatt category by id
 *     tags: [HomeattCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Homeatt category id
 *
 *     responses:
 *       200:
 *         description: The homeatt category was deleted
 *       404:
 *         description: The homeatt category was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/v1/homeattCategories/{id}:
 *  get:
 *    summary: Get the homeatt category by id
 *    tags: [HomeattCategory]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Homeatt category id
 *    responses:
 *      200:
 *        description: The homeatt category description by id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/HomeattCategory'
 *      404:
 *        description: The homeatt category was not found
 */

router
    .route('/')
    .get(homeattCategoryController.getAllHomeattCategoriesHandler)
    .post(homeattCategoryController.addHomeattCategoryHandler);
router
    .route('/:id')
    .put(homeattCategoryController.editHomeattCategoryHandler)
    .delete(homeattCategoryController.deleteHomeattCategoryHandler);

module.exports = router;
