const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Pagina não encontrada</h1>');
});

app.listen(3000);
