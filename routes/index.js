const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Arnold",
    date: new Date()
  },
  {
    text: "Hi people!",
    user: "Bobama Putin",
    date: new Date()
  }
]

router.post('/new', function(req, res, next){
    const data = req.body;
    console.log(data.user);
    console.log(data.message);

    messages.push({text: data.message, user: data.user, date: new Date()})

    res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
