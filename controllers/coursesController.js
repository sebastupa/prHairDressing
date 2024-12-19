const { courses } = require('../models/users'); // Importăm modelul Course

// Obține toate cursurile
const getCourses = async (req, res) => {
    try {
        const courseList = await courses.findAll();
        res.render('courses', { courses: courseList });
    } catch (error) {
        console.error('Eroare la obținerea cursurilor:', error);
        res.status(500).json({ message: 'Eroare la obținerea cursurilor' });
    }
};

// Obține detalii despre un curs
const getCourseDetails = async (req, res) => {
    const courseId = req.params.id;
    try {
        const course = await courses.findByPk(courseId);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: 'Cursul nu a fost găsit' });
        }
    } catch (error) {
        console.error('Eroare la obținerea detaliilor cursului:', error);
        res.status(500).json({ message: 'Eroare la obținerea detaliilor cursului' });
    }
};

// Adaugă un nou curs
const addCourse = async (req, res) => {
    const { course_name, description, instructor_id, price } = req.body;
    try {
        await courses.create({
            course_name,
            description,
            instructor_id,
            price
        });
        res.redirect('/courses');
    } catch (error) {
        console.error('Eroare la adăugarea cursului:', error);
        res.status(500).json({ message: 'Eroare la adăugarea cursului' });
    }
};

// Editează un curs
const editCourse = async (req, res) => {
    const courseId = req.params.id;
    const { course_name, description, instructor_id, price } = req.body;
    try {
        await courses.update(
            { course_name, description, instructor_id, price },
            { where: { course_id: courseId } }
        );
        res.redirect('/courses');
    } catch (error) {
        console.error('Eroare la actualizarea cursului:', error);
        res.status(500).json({ message: 'Eroare la actualizarea cursului' });
    }
};

// Șterge un curs
const deleteCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        await courses.destroy({ where: { course_id: courseId } });
        res.redirect('/courses');
    } catch (error) {
        console.error('Eroare la ștergerea cursului:', error);
        res.status(500).json({ message: 'Eroare la ștergerea cursului' });
    }
};

module.exports = {
    getCourses,
    getCourseDetails,
    addCourse,
    editCourse,
    deleteCourse
};
