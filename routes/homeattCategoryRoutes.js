const router = require('express').Router();
const homeattCategoryController = require('../controllers/homeattCategoryControllers');

router
    .route('/')
    .get(homeattCategoryController.getAllHomeattCategories)
    .post(homeattCategoryController.addHomeattCategory);
router
    .route(':id')
    .delete(homeattCategoryController.deleteHomeattCategory);

module.exports = router;
