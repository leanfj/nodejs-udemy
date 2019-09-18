const express = require('express');

const router = express.Router();

router.get('/aparelho', (req, res, next) => {
  res.send(
    '<form action="/adicionar-aparelho" method="POST"><input type="text" name="modelo"><button type="submit">Enviar</button></input></form>'
  );
});

router.post('/adicionar-aparelho', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
