const router = require('express').Router();
const homeattController = require('../controllers/homeattControllers');

router
    .route('/:homeId/homeatts')
    .get(homeattController.getAllHomeattsForHome);
router
    .route('/:homeId/homeatts/:id')
    .get(homeattController.getHomeattForHome)
    .post(homeattController.linkAttributeToHome)
    .delete(homeattController.unlinkAttributeForHome);

module.exports = router;
