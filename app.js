var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); 

formHistoryRoute = require('./routes/formHistory'); 
templateRoute = require('./routes/template'); 
allFormsRoute = require('./routes/allForms'); 
metadataRoute = require('./routes/formMetadata');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// don't use methods in route name
// prisma - sql queries
app.use('/formHistory', formHistoryRoute); 
app.use('/templates', templateRoute); 
app.use('/formMetadata', metadataRoute); 
app.use('/allForms', allFormsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
