const contactService = require('../services/contactServices');

// GET all contacts
const getAllContactsHandler = async (req, res) => {
    const result = await contactService.getAllContacts();

    res.status(result.statusCode).json(result.json);
};

// GET a single contact
const getContactHandler = async (req, res) => {
    const result = await contactService.getContact(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// CREATE new contact
const createContactHandler = async (req, res) => {
    const result = await contactService.createContact(req.body);

    res.status(result.statusCode).json(result.json);
};

// EDIT contact
const editContactHandler = async (req, res) => {
    const result = await contactService.editContact(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE contact
const deleteContactHandler = async (req, res) => {
    const result = await contactService.deleteContact(req.params.id);

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getAllContactsHandler,
    getContactHandler,
    createContactHandler,
    editContactHandler,
    deleteContactHandler,
};
