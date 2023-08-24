const router = require('express').Router();
const calendarControler = require('../controllers/calendarControllers');

router.route('/').post(calendarControler.createCalendar);
router
    .route('/:id')
    .get(calendarControler.getCalendar)
    .put(calendarControler.editCalendar)
    .delete(calendarControler.deleteCalendar);

module.exports = router;
