var express = require('express');
var router = express.Router();
var Travel = require('../models/travel');
var Reservation = require('../models/reservation');


/* GET ALL TRAVELS and reservations*/
/*
router.get('/chart', function (req, res, next) {
    Travel.find(function (err, travels) {
        Reservation.find(function (err, reservations) {
      if (err) { res.send(err); }
      res.render('chart.ejs', {  travels, reservations});
     });
    });
  });
*/

 /* GET piechart page. */
router.get('/', function(req, res, next) {
  res.render('table', {
      selected: 'table'
  });
});

module.exports = router;
