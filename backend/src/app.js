const { Router } = require("express");
const router = Router();
const data = require('./store/store.js')

// MySql
const mysql = require('mysql');
const config = require('./MySql/config.js');
const connection = mysql.createConnection(config);

router.get('/', function(req, res) {
  // res.header('Access-Control-Allow-Origin', '*');
  res.send(data);
});

router.get('/mysql', (req,res) => { 
	connection.query('SELECT * from multas', function (error, results, fields) {
	  if (error) throw error;
	  res.send(results)
	}); 
})

router.post('/mysql', (req,res) => {

	const data = {patente, vehiculo} = req.body;
	console.log(data);

	connection.query('INSERT INTO `multas` (`patente`, `vehiculo`) values ?', data, function (error, results, fields) {
	  if (error) throw error;
	  res.send({ name: 123})
	}); 
})


module.exports = router