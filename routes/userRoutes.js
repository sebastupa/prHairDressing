const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute pentru utilizatori
router.get('/', userController.getUsers);
router.get('/add', (req, res) => res.render('users/add')); // Form pentru adăugare
router.post('/add', userController.addUser);
router.get('/:id', userController.getUserDetails);
router.get('/:id/edit', userController.getUserForEdit);
router.post('/:id/edit', userController.editUser);
router.post('/:id/delete', userController.deleteUser);

module.exports = router;
