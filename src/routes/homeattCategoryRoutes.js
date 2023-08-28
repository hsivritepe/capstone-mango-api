const router = require('express').Router();
const homeattCategoryController = require('../controllers/homeattCategoryControllers');

router
    .route('/')
    .get(homeattCategoryController.getAllHomeattCategoriesHandler)
    .post(homeattCategoryController.addHomeattCategoryHandler);
router
    .route('/:id')
    .put(homeattCategoryController.editHomeattCategoryHandler)
    .delete(homeattCategoryController.deleteHomeattCategoryHandler);

module.exports = router;
