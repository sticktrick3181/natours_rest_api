// const fs = require('fs');

// const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on 3000 port for Natours API');
});
