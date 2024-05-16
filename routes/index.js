var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function (req, res, next) {
  res.render('home', { title: 'Messages', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  const author = req.body.name
  const message = req.body.message

  if (!author || !message) {
    return res.status(400).send("Name and message are required");
  }

  messages.push({ text: message, user: author, added: new Date() });

  res.redirect('/')
})

module.exports = router;
