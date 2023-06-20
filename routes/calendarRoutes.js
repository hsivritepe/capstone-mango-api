const router = require('express').Router();
const calendarControler = require('../controllers/calendarControllers');

router
    .route('/')
    .get(calendarControler.getAllCalendars)
    .post(calendarControler.createCalendar);
router
    .route('/:id')
    .get(calendarControler.getCalendar)
    .put(calendarControler.editCalendar)
    .delete(calendarControler.deleteCalendar);

module.exports = router;
