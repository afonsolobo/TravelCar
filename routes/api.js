var express = require('express');
var router = express.Router();
var Travel = require('../models/travel');
var Reservation = require('../models/reservation');


/* GET  travels and reservations */
router.get('/chart', function (req, res, next) {
    Travel.find(function (err, travels) {
        Reservation.find(function (err, reservations, cont) {
            var chart = [];
            for (i = 0; i < travels.length; i++) {
                var id = travels[i]._id.toString();
                var cont = 0;
                // run reservations and compare       
                for (y = 0; y < reservations.length; y++) {
                    if (reservations[y].idTravel == id)
                        cont = cont + 1;
                }
                cont;
                console.log(cont);
                chart[i] = { 'travel': travels[i].starting + ' / ' + travels[i].arrival, 'price': travels[i].price, 'reservations': cont };
            }  
            if (err) { res.send(err); }
            res.json(chart);
        });
    });
});


/* GET travels s */
/*router.get('/chart', function (req, res, next) {
    Travel.find(function (err, travels) {
        var chart= [];
        for(i=0;i<travels.length;i++)
        { chart[i]= { 'starting': travels[i].starting, 'arrival': travels[i].arrival, 'price': travels[i].price } ; }          
       if (err) { res.send(err); }
      res.json(chart);
     });
    });
*/

module.exports = router;

