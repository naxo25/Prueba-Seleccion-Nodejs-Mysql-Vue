const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nax',
  password : '1234AAa.',
  database : 'legaltec'
});
 
connection.connect();
 
connection.query('SELECT * from multas', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();