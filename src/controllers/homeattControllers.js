const homeattService = require('../services/homeattServices');

// GET all homeatts for a home
const getAllHomeattsForHomeHandler = async (req, res) => {
    const result = await homeattService.getAllHomeattsForHome(
        req.params.homeId
    );

    res.status(result.statusCode).json(result.json);
};

// GET one homeatt for home
const getHomeattForHomeHandler = async (req, res) => {
    const result = await homeattService.getHomeattForHome(
        req.params.homeId,
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

// LINK an attribute to Home
const linkAttributeToHomeHandler = async (req, res) => {
    const result = await homeattService.linkAttributeToHome(
        req.params.homeId,
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// UNLINK an attribute from Home
const unlinkAttributeForHomeHandler = async (req, res) => {
    const result = await homeattService.unlinkAttributeForHome(
        req.params.homeId,
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllHomeattsForHomeHandler,
    getHomeattForHomeHandler,
    linkAttributeToHomeHandler,
    unlinkAttributeForHomeHandler,
};
