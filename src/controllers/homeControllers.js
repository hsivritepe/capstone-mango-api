const homeService = require('../services/homeServices');

// GET all homes
const getAllHomesHandler = async (req, res) => {
    const result = await homeService.getAllHomes();

    res.status(result.statusCode).json(result.json);
};

// GET one home
const getHomeHandler = async (req, res) => {
    const result = await homeService.getHome(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// CREATE new home
const createHomeHandler = async (req, res) => {
    const result = await homeService.createHome(req.body);

    res.status(result.statusCode).json(result.json);
};

// EDIT home
const editHomeHandler = async (req, res) => {
    const result = await homeService.editHome(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE home
const deleteHomeHandler = async (req, res) => {
    const result = await homeService.deleteHome(req.params.id);

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllHomesHandler,
    getHomeHandler,
    createHomeHandler,
    editHomeHandler,
    deleteHomeHandler,
};
