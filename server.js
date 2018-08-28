var express = require('express');

var app = express();

var port = process.env.port || 3000;




mongoose = require('mongoose'),
  Employee = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/EmployeeDb'); 


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log("Api is running on Port :"+port)
