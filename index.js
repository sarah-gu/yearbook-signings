var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8080 );

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});