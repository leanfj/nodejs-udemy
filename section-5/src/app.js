const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(homeRoutes);

app.listen(3000);
