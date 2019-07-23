var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 	
 	res.render('inputPage', {});
});

router.post('/', function(req, res, next) {
 		
    var sum = parseInt(req.body.num1) + parseInt(req.body.num2); 
    res.json(String(sum));
});

module.exports = router;
