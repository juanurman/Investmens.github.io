/* GET home page. */
const express = require('express');
const router = express.Router();

const {
  infoView,
} = require('../controllers/mainControllers');

router.get('/', infoView);

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
router.get('/amd', function(req, res, next) {
  res.render('pages/acciones/amd', { title: 'INFO' });
});
router.get('/nvda', function(req, res, next) {
  res.render('pages/acciones/nvda', { title: 'INFO' });
});
router.get('/shop', function(req, res, next) {
  res.render('pages/acciones/shop', { title: 'INFO' });
});
router.get('/nke', function(req, res, next) {
  res.render('pages/acciones/nke', { title: 'INFO' });
});
router.get('/meli', function(req, res, next) {
  res.render('pages/acciones/meli', { title: 'INFO' });
});
router.get('/bkr', function(req, res, next) {
  res.render('pages/acciones/bkr', { title: 'INFO' });
});

module.exports = router;
// module.exports = router;
