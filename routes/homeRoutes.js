const router = require('express').Router();
const homeController = require('../controllers/homeControllers');

router
    .route('/')
    .get(homeController.getAllHomes)
    .post(homeController.createHome);
router
    .route('/:id')
    .get(homeController.getHome)
    .delete(homeController.deleteHome)
    .put(homeController.editHome);

module.exports = router;
