const router = require('express').Router();
const attributeControler = require('../controllers/attributeControllers');

router
    .route('/')
    .get(attributeControler.getAllAttributesHandler)
    .post(attributeControler.addAttributeHandler);

router
    .route('/:id')
    .get(attributeControler.getAttributeHandler)
    .delete(attributeControler.deleteAttributeHandler);

module.exports = router;
