var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ecmongodb:g9VEPWmjgi0HCodUcOrkFftV1W8qu1v77QKAkzoLIGZyXMf9XJSWEg2W29hPvihIVipKuCFd9zhP02jyAq4cbQ==@ecmongodb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
