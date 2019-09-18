const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/adicionar-aparelho', (req, res, next) => {
  res.send(
    '<form action="/aparelho" method="POST"><input type="text" name="modelo"><button type="submit">Enviar</button></input></form>'
  );
});

app.post('/aparelho', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>GAMM-APP</h1>');
});

app.listen(3000);
