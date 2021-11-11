const express = require('express');

const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRoutes');

const usersRouter = require('./routes/usersRoutes');

const { connectToDB } = require('./dev-data/data/import-dev-data');
/////////////////CREATING DATABASE CONNECTION
connectToDB();
// console.log(process.env);
////////////////////////////////to use middleware other than GET http requests.
app.use(express.json());
//////

app.use(morgan('dev'));
// importDelete.deleteData();
// importDelete.importData();
// console.log(process.argv);
app.use((req, res, next) => {
  // console.log(req.headers);
  next();
});
///////////////////////////////////////////////mounting of routers
app.use('/', express.static(`${__dirname}/public`));
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', usersRouter);
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    messsage: `Can't get the request ${req.originalUrl}`,
  });
  next();
});

/////////////////////////////////server listening
module.exports = app;
