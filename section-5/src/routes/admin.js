const express = require('express');

const router = express.Router();

router.get('/adicionar-aparelho', (req, res, next) => {
  res.send(
    '<form action="/aparelho" method="POST"><input type="text" name="modelo"><button type="submit">Enviar</button></input></form>'
  );
});

router.post('/aparelho', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
