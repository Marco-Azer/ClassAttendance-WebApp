var event = require('events');
var eventEm1 = new event.EventEmitter();

eventEm1.on('connection', function(){
	console.log('Connected1');
});

eventEm1.on('connection', function(){
	console.log('Connected2');
});

console.log(event.EventEmitter.listenerCount(eventEm1, 'connection'));
eventEm1.emit('connection');
console.log(eventEm1.listeners);