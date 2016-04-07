/**
 * Dependencias
 */

var fs = require('fs');
var server = require('http').createServer(handler);
var io = require('socket.io')(server);

/**
 * Handler del servidor http
 * siempre retorna el mismo archivo index.html
 */

var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

function handler (req, res) {
  res.writeHead(200);
  res.end(html);
}

/**
 * Lógica de socket.io
 */

io.on('connection', function (socket) {
  // Tu código
});

server.listen(3333);