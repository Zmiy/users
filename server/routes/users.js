var express = require('express');
var router = express.Router();
const { userController } = require('../controllers/userController');

/* GET users listing. */
router.get('/', (req, res) => userController.readStudents(req, res));
router.get('/names', (req, res) => userController.readStudentsNames(req, res));
router.patch('/:first/:last', (req, res) => userController.updateActive(req, res));
router.post('/new', (req, res) => userController.writeNewStudent(req, res));
router.post('/new_course', (req, res) => userController.writeNewListStudents(req, res));

module.exports = router;
