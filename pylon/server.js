const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Send a timestamp to the client every second
  const interval = setInterval(() => {
    ws.send(new Date().getTime().toString());
  }, 1000);

  ws.on('close', () => {
    console.log('WebSocket connection closed');
    clearInterval(interval);
  });
});

server.listen(55455, () => {
  console.log('WebSocket server is running on port 55455');
});
