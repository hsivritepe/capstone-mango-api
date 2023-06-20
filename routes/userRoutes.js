const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router
    .route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createUser);
router
    .route('/:id')
    .get(userControllers.getUser)
    .put(userControllers.editUser)
    .delete(userControllers.deleteUser);

module.exports = router;
