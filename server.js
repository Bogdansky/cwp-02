const net = require('net');
const port = 8124;
let sid = 0;
let identifier;

const server = net.createServer((client) => {
    identifier = Date.now()+ ++sid;
    console.log(`Client ${identifier} connected`);

    client.setEncoding('utf8');

    client.on('data', (data) => {
        console.log(data);
        client.write('\r\nHello!\r\nRegards,\r\nServer\r\n');
    });

    client.on('end', () => console.log('Client disconnected'));
});

server.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
});