const { Users } = require('../models/users'); // Model Sequelize

// Obține lista de utilizatori
const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({ order: [['user_id', 'ASC']] });
        res.render('users/list', { users });
    } catch (err) {
        console.error('Eroare la obținerea utilizatorilor:', err);
        res.status(500).send('Eroare la obținerea utilizatorilor');
    }
};

// Obține detaliile unui utilizator
const getUserDetails = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (user) {
            res.render('users/details', { user });
        } else {
            res.status(404).send('Utilizatorul nu a fost găsit');
        }
    } catch (err) {
        console.error('Eroare la obținerea detaliilor utilizatorului:', err);
        res.status(500).send('Eroare la obținerea detaliilor utilizatorului');
    }
};

// Adaugă un utilizator nou
const addUser = async (req, res) => {
    try {
        await Users.create(req.body);
        res.redirect('/users');
    } catch (err) {
        console.error('Eroare la adăugarea utilizatorului:', err);
        res.status(500).send('Eroare la adăugarea utilizatorului');
    }
};

// Șterge un utilizator
const deleteUser = async (req, res) => {
    try {
        await Users.destroy({ where: { user_id: req.params.id } });
        res.redirect('/users');
    } catch (err) {
        console.error('Eroare la ștergerea utilizatorului:', err);
        res.status(500).send('Eroare la ștergerea utilizatorului');
    }
};

// Actualizează un utilizator
const editUser = async (req, res) => {
    try {
        await Users.update(req.body, { where: { user_id: req.params.id } });
        res.redirect('/users');
    } catch (err) {
        console.error('Eroare la actualizarea utilizatorului:', err);
        res.status(500).send('Eroare la actualizarea utilizatorului');
    }
};

// Obține un utilizator pentru editare
const getUserForEdit = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (user) {
            res.render('users/edit', { user });
        } else {
            res.status(404).send('Utilizatorul nu a fost găsit');
        }
    } catch (err) {
        console.error('Eroare la obținerea utilizatorului pentru editare:', err);
        res.status(500).send('Eroare la obținerea utilizatorului pentru editare');
    }
};

module.exports = { getUsers, getUserDetails, addUser, deleteUser, editUser, getUserForEdit };
