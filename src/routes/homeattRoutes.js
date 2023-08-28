const router = require('express').Router();
const homeattController = require('../controllers/homeattControllers');

router
    .route('/:homeId/homeatts')
    .get(homeattController.getAllHomeattsForHomeHandler)
    .post(homeattController.linkAllAttributesToHomeHandler)
    .delete(homeattController.unlinkAllAttributesForHomeHandler);
router
    .route('/:homeId/homeatts/:id')
    .get(homeattController.getHomeattForHomeHandler)
    .post(homeattController.linkAttributeToHomeHandler)
    .delete(homeattController.unlinkAttributeForHomeHandler);

module.exports = router;
