const router = require('express').Router();
const contactControllers = require('../controllers/contactControllers');

router
    .route('/')
    .get(contactControllers.getAllContacts)
    .post(contactControllers.createContact);
router
    .route('/:id')
    .get(contactControllers.getContact)
    .put(contactControllers.editContact)
    .delete(contactControllers.deleteContact);

module.exports = router;
