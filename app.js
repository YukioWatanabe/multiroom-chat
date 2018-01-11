const app = require('./config/server');
const socket_io = require('socket.io');
const port = 3000;
const participants = [];

const server = app.listen(3000, () => {
    console.log("Server is running on port " + port);
});

const io = socket_io.listen(server);

app.set('io', io);

io.on('connection', (socket) => {

    socket.on('new-participant', ( username ) => {
        participants.push(username);
        socket.emit('load-participants', participants);
    });

    socket.on('message-from-user-to-server', (data) => {
        socket.emit('message-from-server-to-user', data);
        socket.broadcast.emit('message-from-server-to-user', data);
    });
});