const attributeService = require('../services/attributeServices');

// GET all attributes
const getAllAttributesHandler = async (req, res) => {
    const result = await attributeService.getAllAttributes();

    res.status(result.statusCode).json(result.json);
};

// GET one attribute
const getAttributeHandler = async (req, res) => {
    const result = await attributeService.getAttribute(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// ADD new attribute
const addAttributeHandler = async (req, res) => {
    const result = await attributeService.addAttribute(req.body);

    res.status(result.statusCode).json(result.json);
};

// DELETE attribute
const deleteAttributeHandler = async (req, res) => {
    const result = await attributeService.deleteAttribute(
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllAttributesHandler,
    getAttributeHandler,
    addAttributeHandler,
    deleteAttributeHandler,
};
