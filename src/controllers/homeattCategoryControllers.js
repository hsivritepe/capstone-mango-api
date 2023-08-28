const homeattCategoryService = require('../services/homeattCategoryServices');

// GET all homeattCategories
const getAllHomeattCategoriesHandler = async (req, res) => {
    const result =
        await homeattCategoryService.getAllHomeattCategories();

    res.status(result.statusCode).json(result.json);
};

// ADD new homeattCategory
const addHomeattCategoryHandler = async (req, res) => {
    const result = await homeattCategoryService.addHomeattCategory(
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// EDIT homeattCategory
const editHomeattCategoryHandler = async (req, res) => {
    const result = await homeattCategoryService.editHomeattCategory(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE homeattCategory
const deleteHomeattCategoryHandler = async (req, res) => {
    const result = await homeattCategoryService.deleteHomeattCategory(
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllHomeattCategoriesHandler,
    addHomeattCategoryHandler,
    editHomeattCategoryHandler,
    deleteHomeattCategoryHandler,
};
