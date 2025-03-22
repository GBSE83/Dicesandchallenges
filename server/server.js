const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir archivos estáticos (tu juego)
app.use(express.static('public'));

// Manejar conexiones de Socket.IO
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado:', socket.id);

    // Cuando un anfitrión crea una sala
    socket.on('create-room', (roomId) => {
        socket.join(roomId);
        console.log(`Anfitrión ha creado la sala: ${roomId}`);
    });

    // Cuando un jugador se une a una sala
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        console.log(`Jugador se ha unido a la sala: ${roomId}`);
    });

    // Transmitir eventos del anfitrión a los jugadores
    socket.on('game-event', (data) => {
        io.to(data.roomId).emit('update-game', data);
    });

    // Manejar desconexiones
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado:', socket.id);
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
