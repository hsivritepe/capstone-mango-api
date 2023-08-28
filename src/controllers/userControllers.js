const userService = require('../services/userServices');

// GET all users
const getAllUsersHandler = async (req, res) => {
    const result = await userService.getAllUsers();

    res.status(result.statusCode).json(result.json);
};

// GET a single user
const getUserHandler = async (req, res) => {
    const result = await userService.getUser(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// CREATE new user
const createUserHandler = async (req, res) => {
    const result = await userService.createUser(req.body);

    res.status(result.statusCode).json(result.json);
};

// EDIT user
const editUserHandler = async (req, res) => {
    const result = await userService.editUser(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE user
const deleteUserHandler = async (req, res) => {
    const result = await userService.deleteUser(req.params.id);

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllUsersHandler,
    getUserHandler,
    createUserHandler,
    editUserHandler,
    deleteUserHandler,
};
