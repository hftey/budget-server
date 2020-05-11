var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// const cors = require('cors')
// const corsOptions = {
//   origin: 'http://budget.macpro:4200',
//   optionsSuccessStatus: 200
// }

//app.use(cors(corsOptions))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://budget-ngx.venzon-solution.com');

    var allowedOrigins = ['http://budget-ngx.venzon-solution.com', 'http://localhost:8100'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
// db.sequelize.sync({force: false}).then(() => {
// });

//require('./app/route/customer.route.js')(app);
require('./app/route/budgetmonth.route.js')(app);
require('./app/route/category.route.js')(app);
require('./app/route/transaction.route.js')(app);

// Create a Server
var server = app.listen(8081, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})
