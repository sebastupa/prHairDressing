const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rute
app.use('/users', userRoutes);

// Pornire server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverul rulează pe http://localhost:${PORT}`));
