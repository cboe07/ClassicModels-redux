var express = require('express');
var router = express.Router();
var connect = require('connect');
var mysql = require('mysql');
var config = require('../config/config');
var connection = mysql.createConnection({
	host     : config.sql.host,
	user     : config.sql.user,
	password : config.sql.password,
	database : config.sql.database 
});

connection.connect(function(error){
	if(error){
		console.log(error.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
})


/* GET home page. */
router.get('/', function(req, res, next) {
	var productLineQuery = 'SELECT productLine FROM productlines';
	connection.query(productLineQuery, function(error, results){
		if(error) throw error;
		console.log(results);
		res.render('index', { productArray: results });
	});
});

router.get('/productlines:id', function(req,res,next){
	var textDescQuery = 'SELECT textDescription FROM productlines';
	connection.query(textDescQuery, function(error,results){
		if(error) throw error;
		console.log(results);
		res.render('productlines',{ productArray: text })
	})
})





module.exports = router;




/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
