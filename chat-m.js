var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat-m.html');
});

app.get('/socket.io.js', function(req, res){
  res.sendFile(__dirname + '/socket.io.js');
});

app.get('/jquery-2.0.1.min.js', function(req, res){
  res.sendFile(__dirname + '/jquery-2.0.1.min.js');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
