var io = require('socket.io').listen(8090);
var logger = require('./print_logger');
var count = 0;

io.sockets.on('connection', function (socket) {
  var interval = setInterval(function(){
	count++;
	logger.info('Printing ' + count);
	socket.emit('PUSH_PRINT_JOB_STATUS', { hello: 'world' + count});
	if (count == 10) {
		clearInterval(interval);
		count = 0;
		socket.disconnect();
	}
	},1000); 
});
