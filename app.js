var server = require ('http').createServer(app),
	io = require ('socket.io').listen(server),
	fs = require('fs');

app.get('/', function(req,res){
	res.sendfile(__dirname + '/index.html');
});
