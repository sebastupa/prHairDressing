const express = require('express');
const router = express.Router();
const { getModules, addModule, editModule, deleteModule } = require('../controllers/modulesController');

// Rutele pentru module
router.get('/', getModules);  // Afișează toate modulele
router.post('/add', addModule);  // Adaugă un modul
router.get('/edit/:id', editModule);  // Editează un modul
router.post('/delete/:id', deleteModule);  // Șterge un modul

module.exports = router;
