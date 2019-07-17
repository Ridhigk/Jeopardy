var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.get('/Home', function(req, res){
  res.sendFile(__dirname + '/Jeopardy/Home.html');
});

app.get('/Join', function(req, res){
  res.sendFile(__dirname + '/Jeopardy/Join.html');
});

app.get('/Master', function(req, res){
  res.sendFile(__dirname + '/Jeopardy/Master.html');
});

app.get('/socket.io.js', function(req, res){
  res.sendFile(__dirname + '/socket.io.js');
});

app.get('/jquery-2.0.1.min.js', function(req, res){
  res.sendFile(__dirname + '/jquery-2.0.1.min.js');
});


io.on('connection', function(socket){
console.log('connected');
  socket.on('team join', function(msg){
    io.emit('team join', msg);
	console.log(msg);
  });
  
  socket.on('team connected', function(msg){
    io.emit('team connected', msg);
	console.log(msg);
  });
  
  socket.on('add', function(msg){
    io.emit('add', msg);
	console.log('add' + msg);
  });
  
  socket.on('sub', function(msg){
    io.emit('sub', msg);
	console.log('sub'  + msg);
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
