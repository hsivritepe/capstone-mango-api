const calendarService = require('../services/calendarServices');

// GET a single calendar
const getCalendarHandler = async (req, res) => {
    const result = await calendarService.getCalendar(req.params.id);

    res.status(result.statusCode).json(result.json);
};

// CREATE new calendar
const createCalendarHandler = async (req, res) => {
    const result = await calendarService.createCalendar(req.body);

    res.status(result.statusCode).json(result.json);
};

// EDIT calendar
const editCalendarHandler = async (req, res) => {
    const result = await calendarService.editCalendar(
        req.params.id,
        req.body
    );

    res.status(result.statusCode).json(result.json);
};

// DELETE calendar
const deleteCalendarHandler = async (req, res) => {
    const result = await calendarService.deleteCalendar(
        req.params.id
    );

    res.status(result.statusCode).json(result.json);
};

module.exports = {
    getCalendarHandler,
    createCalendarHandler,
    editCalendarHandler,
    deleteCalendarHandler,
};
