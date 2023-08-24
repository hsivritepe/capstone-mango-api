const router = require('express').Router();
const attributeControler = require('../controllers/attributeControllers');

router
    .route('/')
    .get(attributeControler.getAllAttributes)
    .post(attributeControler.addAttribute);

router
    .route('/:id')
    .get(attributeControler.getAttribute)
    .delete(attributeControler.deleteAttribute);

module.exports = router;
