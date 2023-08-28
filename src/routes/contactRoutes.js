const router = require('express').Router();
const contactControllers = require('../controllers/contactControllers');

router
    .route('/')
    .get(contactControllers.getAllContactsHandler)
    .post(contactControllers.createContactHandler);
router
    .route('/:id')
    .get(contactControllers.getContactHandler)
    .put(contactControllers.editContactHandler)
    .delete(contactControllers.deleteContactHandler);

module.exports = router;
