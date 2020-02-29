var express = require('express');

var app = express();

app.set('port', 7000);

app.get('/', function(reg,res){
    res.type('text/plain');
    res.send('welcome to the main page!!!');
});

app.get('/other-page', function(reg,res){
    res.type('text/plain');
    res.send('Yes this is working');
});

app.use(function(reg,res){
    res.type('text/plain');
    res.status(404);
    res.send('404-Its all gone to hell.')

});

app.use(function(err,reg,res, next){
        res.type('plain/text');
        res.status(500);
        res.send('500 - this is the server error');

});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port')+', press Ctrl-c to terminate.')
});