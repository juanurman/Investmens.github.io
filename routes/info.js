var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/acciones/info', { title: 'INFO' });
});
router.get('/appl', function(req, res, next) {
  res.render('pages/acciones/appl', { title: 'INFO' });
});

router.get('/amzn', function(req, res, next) {
  res.render('pages/acciones/amzn', { title: 'INFO' });
});

router.get('/googl', function(req, res, next) {
  res.render('pages/acciones/googl', { title: 'INFO' });
});

router.get('/msft', function(req, res, next) {
  res.render('pages/acciones/msft', { title: 'INFO' });
});
router.get('/ko', function(req, res, next) {
  res.render('pages/acciones/ko', { title: 'INFO' });
});

module.exports = router;
