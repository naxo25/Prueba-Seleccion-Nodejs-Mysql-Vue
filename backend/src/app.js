const { Router } = require("express");
const router = Router();
const data = require('./store/store.js')

router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*'); // Solo esta ruta es pública
  res.send(data);
});

console.log(data);

module.exports = router