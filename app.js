var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); 

getTemplateRows = require('./routes/getTemplateRows'); 
formHistoryRoute = require('./routes/formHistory');
postRowRoute = require('./routes/postRow');
removeFormRoute = require('./routes/removeForm'); 
getMetadataRoute = require('./routes/getFormMetadata'); 
postMetadataRoute = require('./routes/postFormMetadata'); 
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

app.use('/getTemplate', getTemplateRows); 
app.use('/formHistory', formHistoryRoute); 
app.use('/postRow', postRowRoute); 
app.use('/removeForm', removeFormRoute); 
app.use('/getMetadata', getMetadataRoute); 
app.use('/postMetadata', postMetadataRoute); 

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
