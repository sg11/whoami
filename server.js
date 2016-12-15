var express = require('express');
var app = express();
var whoami = require('./app/whoami');

whoami(app);

app.listen(80,function(){
    console.log("App listening on port 8080");
});