const router = require('express').Router();
const homeController = require('../controllers/homeControllers');

router
    .route('/')
    .get(homeController.getAllHomesHandler)
    .post(homeController.createHomeHandler);
router
    .route('/:id')
    .get(homeController.getHomeHandler)
    .delete(homeController.deleteHomeHandler)
    .put(homeController.editHomeHandler);

module.exports = router;
