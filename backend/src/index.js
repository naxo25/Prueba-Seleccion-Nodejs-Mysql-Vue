const express = require('express');
const app = express();

// routes
app.use('/multas', require('./app.js'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${3000}`)
})