const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.get('/', coursesController.getCourses);
router.get('/details/:id', coursesController.getCourseDetails);
router.post('/add', coursesController.addCourse);
router.post('/edit/:id', coursesController.editCourse);
router.post('/delete/:id', coursesController.deleteCourse);

module.exports = router;
