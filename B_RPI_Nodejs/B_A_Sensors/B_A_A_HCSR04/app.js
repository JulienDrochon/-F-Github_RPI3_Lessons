var five = require('johnny-five');
var PiIO = require('pi-io');
var http = require('http');
var express = require('express');
var app=express();
var distanceData;

//---------------------------------------------- Serveur Socket.io
app.use(express.static(__dirname + '/public'));
var server = http.createServer(app);
server.listen(9000);
var io = require('socket.io').listen(server);



//---------------------------------------------- Johnny Five Board
var board = new five.Board({
  io: new PiIO()
});

//---------------------------------------------- Set GPIO
board.on('ready', function() {
  var proximity = new five.Proximity({
    controller: PiIO.HCSR04, // Custom controller
    triggerPin: 'GPIO23',
    echoPin: 'GPIO24'
  });

  //---------------------------------------------- When GPIO values change…
  io.of('/secret').on('connection', function (socket) {
    proximity.on("change", function() {
      distanceData = this.cm;
      if(distanceData > 0){
        console.log(distanceData);
        socket.emit('distanceData', distanceData );
      }
    });

 });
});
