const { Module, Course } = require('../models'); // Asigură-te că ai importat corect modelele

// Obține toate modulele
const getModules = async (req, res) => {
    try {
        const modules = await Module.findAll({
            include: [{
                model: Course,
                as: 'course',  // Asocierea definită mai sus
                attributes: ['course_name']  // Include doar numele cursului
            }]
        });

        res.render('modules', { modules });
    } catch (error) {
        console.error('Eroare la obținerea modulelor:', error);
        res.status(500).send('Eroare la obținerea modulelor.');
    }
};

// Adaugă un modul
const addModule = async (req, res) => {
    try {
        await Module.create({
            course_id: req.body.course_id,
            module_title: req.body.module_title,
            video_url: req.body.video_url,
            content: req.body.content
        });
        res.redirect('/modules');  // Redirecționează către lista de module
    } catch (error) {
        console.error('Eroare la adăugarea modulului:', error);
        res.status(500).send('Eroare la adăugarea modulului.');
    }
};

// Editează un modul
const editModule = async (req, res) => {
    try {
        const module = await Module.findByPk(req.params.id);
        if (module) {
            module.course_id = req.body.course_id;
            module.module_title = req.body.module_title;
            module.video_url = req.body.video_url;
            module.content = req.body.content;

            await module.save();
            res.redirect('/modules');  // Redirecționează către lista de module
        } else {
            res.status(404).send('Modulul nu a fost găsit.');
        }
    } catch (error) {
        console.error('Eroare la editarea modulului:', error);
        res.status(500).send('Eroare la editarea modulului.');
    }
};

// Șterge un modul
const deleteModule = async (req, res) => {
    try {
        const module = await Module.findByPk(req.params.id);
        if (module) {
            await module.destroy();
            res.redirect('/modules');
        } else {
            res.status(404).send('Modulul nu a fost găsit.');
        }
    } catch (error) {
        console.error('Eroare la ștergerea modulului:', error);
        res.status(500).send('Eroare la ștergerea modulului.');
    }
};

module.exports = { getModules, addModule, editModule, deleteModule };
