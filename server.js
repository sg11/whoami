var express = require('express');
var app = express();
var whoami = require('./app/whoami');

whoami(app);

app.listen(process.env.PORT || 3000 || 8080,function(){
    console.log("App listening on port 8080");
});