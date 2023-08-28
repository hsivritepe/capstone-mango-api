const router = require('express').Router();
const calendarControler = require('../controllers/calendarControllers');

router.route('/').post(calendarControler.createCalendarHandler);
router
    .route('/:id')
    .get(calendarControler.getCalendarHandler)
    .put(calendarControler.editCalendarHandler)
    .delete(calendarControler.deleteCalendarHandler);

module.exports = router;
