const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router
    .route('/')
    .get(userControllers.getAllUsersHandler)
    .post(userControllers.createUserHandler);
router
    .route('/:id')
    .get(userControllers.getUserHandler)
    .put(userControllers.editUserHandler)
    .delete(userControllers.deleteUserHandler);

module.exports = router;
