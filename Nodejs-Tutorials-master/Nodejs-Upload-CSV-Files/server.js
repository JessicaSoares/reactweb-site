const express = require('express');
const app = express();
 
const db = require('./app/config/db.config.js');

global.__basedir = __dirname;   
    
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});       

let router = require('./app/routers/excel.router.js');
app.use(express.static('resources'));
app.use('/', router);   

// Create a Server
const server = app.listen(8080, function () {
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})