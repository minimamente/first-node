const express = require('express');
const router = express.Router();

// agrego las rutas que necesito segun secciones

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;

// ejs info
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-es
